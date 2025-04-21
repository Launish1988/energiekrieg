import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GameBoard from "@/components/GameBoard";
import { useMatchFlow } from "@/lib/matchflow";
import { DeckStore } from "@/lib/decks";
import { allCards } from "@/lib/cards";
import type { CardData } from "@/components/Card";
import { getCurrentUser } from "@/lib/session";

/* --------------------------------------------------
 * Helper: shuffle
 * -------------------------------------------------- */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchPage() {
  const router = useRouter();
  const { query } = router;

  /* ---- ensure login ---- */
  useEffect(() => {
    if (!getCurrentUser()) router.replace("/login");
  }, [router]);

  /* ---- deck selection ---- */
  const deckIdx = Number(query.deckIdx ?? 0); // ?deckIdx=1 to pick second deck
  const decks = DeckStore.getAll();
  const selected = decks[deckIdx]?.cards ?? [];
  const deckP1: CardData[] = selected
    .map((id) => allCards.find((c) => c.id === id))
    .filter(Boolean) as CardData[];

  // Simple mirror match if no second player yet
  const deckP2: CardData[] = shuffle(deckP1);

  if (deckP1.length !== 30) {
    return (
      <div className="p-4 text-center text-red-400">
        Kein gültiges Deck gefunden. Bitte erst im Deck‑Builder eines mit 30 Karten
        speichern.
      </div>
    );
  }

  /* ---- game logic ---- */
  const { state, playCard, attack, endTurn } = useMatchFlow({
    deck1: shuffle(deckP1),
    deck2: deckP2,
  });

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h1 className="text-center text-2xl font-bold text-yellow-400">
        Energiekrieg ⚡ – Match
      </h1>

      <GameBoard state={state} playCard={playCard} attack={attack} endTurn={endTurn} />
    </main>
  );
}
