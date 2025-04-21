import { useEffect, useMemo, useState } from "react";
import GameBoard from "@/components/GameBoard";
import { allCards } from "@/lib/cards";
import { useMatchFlow } from "@/lib/matchflow";
import type { CardData } from "@/components/Card";

/* --------------------------------------------------
 * Helper: read saved decks (localStorage → up to 3)
 * -------------------------------------------------- */
function loadLocalDeck(idx = 0): CardData[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("decks");
    if (!raw) return [];
    const arr = JSON.parse(raw);
    const selected = arr[idx];
    if (!selected) return [];
    return selected.cards
      .map((id: string) => allCards.find((c) => c.id === id))
      .filter(Boolean) as CardData[];
  } catch (e) {
    console.error("Could not parse decks from LS", e);
    return [];
  }
}

/* simple in‑place shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Fallback‑Deck: die ersten 30 Karten aus allCards */
const fallbackDeck: CardData[] = allCards.slice(0, 30) as CardData[];

export default function MatchPage() {
  /* ---- deck setup (once on mount) ---- */
  const [ready, setReady] = useState(false);
  const [deckP1, setDeckP1] = useState<CardData[]>([]);
  const [deckP2, setDeckP2] = useState<CardData[]>([]);

  useEffect(() => {
    // läuft nur im Browser
    const d1 = loadLocalDeck(0);
    const d2 = loadLocalDeck(1);
    setDeckP1(d1.length === 30 ? shuffle(d1) : shuffle(fallbackDeck));
    setDeckP2(d2.length === 30 ? shuffle(d2) : shuffle(fallbackDeck));
    setReady(true);
  }, []);

  /* ---- game logic ---- */
  const {
    state,
    playCard,
    attack,
    endTurn,
  } = useMatchFlow({
    deck1: deckP1,
    deck2: deckP2,
  });

  if (!ready) return <p className="p-4">Lade&nbsp;Deck&nbsp;…</p>;

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h1 className="text-center text-2xl font-bold text-yellow-400">
        Energiekrieg ⚡ – 1&nbsp;vs&nbsp;1‑Match
      </h1>

      <GameBoard
        state={state}
        playCard={playCard}
        attack={attack}
        endTurn={endTurn}
      />
    </main>
  );
}
