import type { CardData } from "./cards";

/* ---------------------------------------------
 *  Typdefinitionen                              
 * -------------------------------------------*/
export interface Deck {
  /** interne ID (uuid) – wird beim Erstellen generiert */
  id: string;
  /** Anzeigename des Decks (max 30 Zeichen) */
  name: string;
  /** Liste der Karten‑IDs (genau 30) */
  cards: string[];
}

/**
 * Lokaler Storage‑Key, unter dem ALLE Decks des Nutzers gespeichert werden.
 * Struktur: Deck[] (max. 3 Einträge)
 */
const STORAGE_KEY = "decks";

/* ---------------------------------------------
 *  Hilfsfunktionen                             
 * -------------------------------------------*/
function uuid() {
  return crypto.randomUUID();
}

function readDecks(): Deck[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Deck[]) : [];
  } catch (e) {
    console.error("Could not parse decks LS", e);
    return [];
  }
}

function writeDecks(decks: Deck[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(decks.slice(0, 3)));
}

/* ---------------------------------------------
 *  Public API                                   
 * -------------------------------------------*/
export const DeckStore = {
  /** Liefert alle gespeicherten Decks (max 3). */
  getAll(): Deck[] {
    return readDecks();
  },

  /** Holt ein Deck per ID oder `null`. */
  get(id: string): Deck | null {
    return readDecks().find((d) => d.id === id) ?? null;
  },

  /** Fügt ein neues Deck hinzu. Überschreibt ältestes, wenn >3. */
  add(name: string, cards: CardData[] | string[]): Deck {
    const decks = readDecks();
    const cardIds = (cards as any[]).map((c) => (typeof c === "string" ? c : (c as CardData).id));
    const deck: Deck = { id: uuid(), name: name.slice(0, 30), cards: cardIds.slice(0, 30) };
    decks.push(deck);
    writeDecks(decks);
    return deck;
  },

  /** Aktualisiert ein bestehendes Deck. */
  update(id: string, payload: Partial<Pick<Deck, "name" | "cards">>) {
    const decks = readDecks().map((d) =>
      d.id === id
        ? {
            ...d,
            name: payload.name ? payload.name.slice(0, 30) : d.name,
            cards: payload.cards ? payload.cards.slice(0, 30) : d.cards,
          }
        : d,
    );
    writeDecks(decks);
  },

  /** Löscht ein Deck. */
  remove(id: string) {
    const decks = readDecks().filter((d) => d.id !== id);
    writeDecks(decks);
  },
};
