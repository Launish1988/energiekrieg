import { useEffect, useMemo, useState } from "react";
import { allCards } from "@/lib/cards";
import type { CardData } from "@/components/Card";
import Card from "@/components/Card";
import { DeckStore } from "@/lib/decks";
import { getCurrentUser } from "@/lib/session";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function DeckBuilderPage() {
  const router = useRouter();
  const cards = useMemo<CardData[]>(() => allCards as CardData[], []);

  /* ------------- State ------------- */
  const [user, setUser] = useState<string>("");
  const [deckName, setDeckName] = useState<string>("");
  const [selected, setSelected] = useState<CardData[]>([]);
  const [filter, setFilter] = useState<string>("");

  /* ------------- Load current user & decks ------------- */
  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      router.push("/login");
      return;
    }
    setUser(u);
    // wenn bereits Decks existieren, nimm das erste zum Bearbeiten (optional)
    const firstDeck = DeckStore.getAll()[0];
    if (firstDeck) {
      setDeckName(firstDeck.name);
      const sel = firstDeck.cards
        .map((id) => cards.find((c) => c.id === id))
        .filter(Boolean) as CardData[];
      setSelected(sel);
    }
  }, [cards, router]);

  /* ------------- Card toggle ------------- */
  const toggleCard = (card: CardData) => {
    setSelected((prev) => {
      const found = prev.find((c) => c.id === card.id);
      if (found) return prev.filter((c) => c.id !== card.id);
      if (prev.length >= 30) {
        alert("Du kannst maximal 30 Karten im Deck haben!");
        return prev;
      }
      return [...prev, card];
    });
  };

  /* ------------- Save deck ------------- */
  const save = () => {
    if (!deckName.trim() || selected.length !== 30) {
      alert("Bitte Deck‑Namen eingeben und genau 30 Karten wählen.");
      return;
    }
    DeckStore.add(deckName.trim(), selected.map((c) => c.id));
    alert("Deck gespeichert!");
  };

  /* ------------- Filtered cards ------------- */
  const filtered = cards.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase()),
  );

  /* ------------- Render ------------- */
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-4 p-4">
      <h1 className="text-center text-2xl font-bold text-yellow-400">Deck‑Builder</h1>

      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          placeholder="Deck‑Name"
          className="rounded border border-slate-600 bg-slate-800 px-3 py-1 text-white focus:outline-none"
        />
        <button
          onClick={save}
          className="rounded bg-green-700 px-4 py-2 text-white shadow hover:bg-green-600"
        >
          💾 Speichern
        </button>
        <span className="text-sm text-slate-400">
          Karten {selected.length}/30
        </span>
      </div>

      <input
        type="text"
        placeholder="Suche …"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mx-auto w-full max-w-sm rounded border border-slate-600 bg-slate-800 px-3 py-1 text-white focus:outline-none"
      />

      <h2 className="mt-4 text-lg font-semibold text-slate-200">Ausgewählte Karten</h2>
      <div className="flex flex-wrap gap-2 rounded bg-slate-900 p-3">
        {selected.map((c) => (
          <Card
            key={c.id}
            {...c}
            isPlayable={false}
            glow
            onPlay={() => toggleCard(c)}
          />
        ))}
        {selected.length === 0 && <p className="text-slate-500">Noch keine Karten ausgewählt.</p>}
      </div>

      <h2 className="mt-6 text-lg font-semibold text-slate-200">Alle Karten</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {filtered.map((card) => (
          <button
            key={card.id}
            onClick={() => toggleCard(card)}
            className={clsx(
              selected.find((c) => c.id === card.id)
                ? "ring-4 ring-green-500"
                : "hover:ring-2 hover:ring-yellow-400",
            )}
          >
            <Card {...card} isPlayable={false} />
          </button>
        ))}
      </div>
    </main>
  );
}
