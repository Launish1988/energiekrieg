import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Card, { CardData } from "./Card";
import type { PlayerId, MatchState } from "../lib/matchflow";

interface Props {
  state: MatchState;
  playCard: (player: PlayerId, cardId: string) => void;
  attack: (
    attackerOwner: PlayerId,
    attackerIndex: number,
    targetOwner: PlayerId,
    targetIndex: number | "hero",
  ) => void;
  endTurn: () => void;
}

/**
 * Zeigt das vollständige Spielbrett inkl. Hände, Boards & Held‑Infos.
 * Vereinfacht: Board hat fixe Slots (max 7 Minions).
 */
const GameBoard: React.FC<Props> = ({ state, playCard, attack, endTurn }) => {
  const { activePlayer, players, turnTime, winner } = state;
  const me: PlayerId = "player1"; // TODO: via Props oder Context setzen, wenn echte 2‑Spieler‑Session
  const opponent: PlayerId = me === "player1" ? "player2" : "player1";

  /* ------- Board‑Interaktion (angreifende Minion auswählen) ------- */
  const [selectedAttacker, setSelectedAttacker] = useState<{
    owner: PlayerId;
    index: number;
  } | null>(null);

  const handleBoardClick = (
    owner: PlayerId,
    index: number | "hero",
  ) => {
    // kein Minion ausgewählt → erst Attacker festlegen (nur eigene)
    if (!selectedAttacker) {
      if (owner !== me || typeof index !== "number") return; // nur eigener Minion darf starten
      setSelectedAttacker({ owner, index });
      return;
    }

    // Attacker ist gesetzt → versuche Angriff
    const { owner: aOwner, index: aIdx } = selectedAttacker;
    attack(aOwner, aIdx, owner, index);
    setSelectedAttacker(null);
  };

  const renderHero = (owner: PlayerId) => {
    const hp = players[owner].health;
    return (
      <button
        onClick={() => handleBoardClick(owner, "hero")}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-white shadow-md hover:ring-2 hover:ring-yellow-300"
      >
        <span className="text-lg font-bold">{hp}</span>
        {winner === owner && (
          <span className="absolute -top-2 right-0 rounded bg-green-600 px-1 text-xs">WIN</span>
        )}
      </button>
    );
  };

  const renderBoardRow = (owner: PlayerId) => (
    <div className="flex min-h-[110px] items-end justify-center gap-2 py-4">
      {players[owner].board.map((m, idx) => (
        <button
          key={m.id}
          onClick={() => handleBoardClick(owner, idx)}
          className={clsx(
            "relative flex flex-col items-center rounded-md bg-slate-700 p-1 text-xs text-white shadow-md",
            selectedAttacker?.owner === owner && selectedAttacker.index === idx &&
              "ring-4 ring-red-500",
          )}
        >
          <Image src={m.image} alt={m.name} width={60} height={80} />
          <span>{m.attack}/{m.health}</span>
        </button>
      ))}
    </div>
  );

  /* ---------------- render ---------------- */
  return (
    <div className="flex flex-col gap-2">
      {/* opponent hand + info */}
      <div className="flex items-center justify-between px-4 text-sm text-slate-300">
        <span>Gegner Hand: {players[opponent].hand.length}</span>
        <span>Leben: {players[opponent].health}</span>
      </div>

      {/* opponent board */}
      {renderBoardRow(opponent)}

      {/* heroes */}
      <div className="flex items-center justify-center gap-8">
        {renderHero(opponent)}
        <div className="text-center text-lg font-semibold text-yellow-400">
          {winner ? (winner === me ? "Sieg!" : "Niederlage") : `${turnTime}s`}
        </div>
        {renderHero(me)}
      </div>

      {/* player board */}
      {renderBoardRow(me)}

      {/* eigene Hand */}
      <div className="mt-2 flex items-end justify-center gap-2 overflow-x-auto py-2">
        {players[me].hand.map((card) => (
          <Card
            key={card.id}
            {...(card as CardData)}
            isPlayable={card.cost <= players[me].currentMana && activePlayer === me}
            onPlay={() => playCard(me, card.id)}
          />
        ))}
      </div>

      {/* Steuerleiste */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          onClick={endTurn}
          className="rounded bg-blue-700 px-4 py-2 text-white shadow hover:bg-blue-600 disabled:opacity-50"
          disabled={activePlayer !== me || !!winner}
        >
          Zug beenden
        </button>
        <span className="text-sm text-slate-300">
          Mana: {players[me].currentMana}/{players[me].maxMana}
        </span>
      </div>
    </div>
  );
};

export default GameBoard;
