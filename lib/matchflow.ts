import { useState, useEffect, useCallback } from "react";
import type { CardData } from "../components/Card";

/*************************************************
 *  Basic Types                                  *
 *************************************************/
export type PlayerId = "player1" | "player2";

export interface PlayerState {
  id: PlayerId;
  deck: CardData[]; // remaining cards in draw‑pile
  hand: CardData[]; // max 10
  board: CardData[]; // minions in play (order = positions on board)
  graveyard: CardData[]; // destroyed minions / used spells
  maxMana: number; // 1..10
  currentMana: number; // resets to maxMana each turn
  health: number; // starts at 30
  heroPowerUsed: boolean; // reset each turn
}

export interface MatchState {
  activePlayer: PlayerId;
  turnTime: number; // seconds remaining in current turn
  players: Record<PlayerId, PlayerState>;
  winner: PlayerId | null;
}

interface UseMatchFlowOptions {
  /** start decks for player1 & player2 (already shuffled) */
  deck1: CardData[];
  deck2: CardData[];
  /** initial hand size (default = 3) */
  openingHand?: number;
  /** length of a turn in seconds (default = 30) */
  turnDuration?: number;
}

/*************************************************
 *  Hook                                          *
 *************************************************/
export function useMatchFlow(options: UseMatchFlowOptions) {
  const {
    deck1,
    deck2,
    openingHand = 3,
    turnDuration = 30,
  } = options;

  /* ---------- helpers ---------- */
  const initPlayer = useCallback(
    (id: PlayerId, deck: CardData[]): PlayerState => {
      const hand = deck.slice(0, openingHand);
      const rest = deck.slice(openingHand);
      return {
        id,
        deck: rest,
        hand,
        board: [],
        graveyard: [],
        maxMana: 1,
        currentMana: 1,
        health: 30,
        heroPowerUsed: false,
      };
    },
    [openingHand]
  );

  /* ---------- initial state ---------- */
  const [state, setState] = useState<MatchState>(() => ({
    activePlayer: Math.random() < 0.5 ? "player1" : "player2",
    turnTime: turnDuration,
    winner: null,
    players: {
      player1: initPlayer("player1", deck1),
      player2: initPlayer("player2", deck2),
    },
  }));

  /* ---------- Turn Timer ---------- */
  useEffect(() => {
    if (state.winner) return; // stop timer if game over

    if (state.turnTime === 0) {
      endTurn();
      return;
    }

    const timer = setTimeout(() =>
      setState((prev) => ({ ...prev, turnTime: prev.turnTime - 1 }))
    , 1_000);
    return () => clearTimeout(timer);
  }, [state.turnTime, state.winner]);

  /* ---------- internal mutators ---------- */
  const setPlayer = (id: PlayerId, updater: (p: PlayerState) => PlayerState) =>
    setState((prev) => ({
      ...prev,
      players: { ...prev.players, [id]: updater(prev.players[id]) },
    }));

  /* ---------- core actions ---------- */
  const drawCard = (id: PlayerId, amount = 1) => {
    setPlayer(id, (p) => {
      const draw = p.deck.slice(0, amount);
      const rest = p.deck.slice(amount);
      // fatigue not implemented yet
      return {
        ...p,
        deck: rest,
        hand: [...p.hand, ...draw].slice(0, 10),
      };
    });
  };

  const startTurn = (id: PlayerId) => {
    setPlayer(id, (p) => {
      const newMax = Math.min(10, p.maxMana + 1);
      return {
        ...p,
        maxMana: newMax,
        currentMana: newMax,
        heroPowerUsed: false,
      };
    });
    drawCard(id, 1);
  };

  const endTurn = () => {
    setState((prev) => ({
      ...prev,
      activePlayer: prev.activePlayer === "player1" ? "player2" : "player1",
      turnTime: turnDuration,
    }));
  };

  const manuallyEndTurn = () => {
    setState((prev) => ({ ...prev, turnTime: 0 }));
  };

  /* ---------- side effect: when active player changes ---------- */
  useEffect(() => {
    startTurn(state.activePlayer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activePlayer]);

  /* ---------- playing a card ---------- */
  const playCard = (player: PlayerId, cardId: string) => {
    const p = state.players[player];
    const card = p.hand.find((c) => c.id === cardId);
    if (!card) return;
    if (card.cost > p.currentMana) return; // not enough mana

    // very simple: spells vs minions distinction by attack/health
    if (card.attack > 0 || card.health > 0) {
      // minion → board
      setPlayer(player, (prev) => ({
        ...prev,
        hand: prev.hand.filter((c) => c.id !== cardId),
        board: [...prev.board, card],
        currentMana: prev.currentMana - card.cost,
      }));
    } else {
      // spell → for now: deal 3 dmg to opponent hero if description contains "damage"
      const opponent: PlayerId = player === "player1" ? "player2" : "player1";
      setPlayer(player, (prev) => ({
        ...prev,
        hand: prev.hand.filter((c) => c.id !== cardId),
        currentMana: prev.currentMana - card.cost,
      }));
      if (/damage/i.test(card.description)) {
        setPlayer(opponent, (prev) => ({ ...prev, health: prev.health - 3 }));
      }
    }
    checkWinner();
  };

  /* ---------- attacking ---------- */
  const attack = (
    attackerOwner: PlayerId,
    attackerIndex: number,
    targetOwner: PlayerId,
    targetIndex: number | "hero"
  ) => {
    const opp: PlayerId = attackerOwner === "player1" ? "player2" : "player1";
    const attacker = state.players[attackerOwner].board[attackerIndex];
    if (!attacker) return;

    if (targetIndex === "hero") {
      setPlayer(targetOwner, (prev) => ({ ...prev, health: prev.health - attacker.attack }));
    } else {
      const target = state.players[targetOwner].board[targetIndex];
      if (!target) return;
      // exchange damage
      setPlayer(attackerOwner, (prev) => {
        const newBoard = [...prev.board];
        newBoard[attackerIndex] = { ...attacker, health: attacker.health - target.attack };
        return { ...prev, board: newBoard };
      });
      setPlayer(targetOwner, (prev) => {
        const newBoard = [...prev.board];
        newBoard[targetIndex] = { ...target, health: target.health - attacker.attack };
        return { ...prev, board: newBoard };
      });
    }
    // remove dead minions
    [attackerOwner, opp].forEach((pid) =>
      setPlayer(pid, (prev) => ({
        ...prev,
        board: prev.board.filter((m) => m.health > 0),
      }))
    );
    checkWinner();
  };

  /* ---------- hero power (simple ping 1 dmg) ---------- */
  const heroPower = (player: PlayerId) => {
    const p = state.players[player];
    if (p.heroPowerUsed || p.currentMana < 2) return;
    const opponent: PlayerId = player === "player1" ? "player2" : "player1";
    setPlayer(player, (prev) => ({ ...prev, currentMana: prev.currentMana - 2, heroPowerUsed: true }));
    setPlayer(opponent, (prev) => ({ ...prev, health: prev.health - 1 }));
    checkWinner();
  };

  /* ---------- win detection ---------- */
  const checkWinner = () => {
    const p1HP = state.players.player1.health;
    const p2HP = state.players.player2.health;
    if (p1HP <= 0 && !state.winner) setState((s) => ({ ...s, winner: "player2" }));
    if (p2HP <= 0 && !state.winner) setState((s) => ({ ...s, winner: "player1" }));
  };

  /* ---------- public API ---------- */
  return {
    state,
    drawCard,
    playCard,
    attack,
    heroPower,
    endTurn: manuallyEndTurn,
  } as const;
}
