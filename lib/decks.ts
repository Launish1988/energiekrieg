// lib/decks.ts

import { CardData } from './cards';

export type Deck = {
  name: string;
  cards: CardData[];
};

// Holt den aktuellen Benutzernamen aus localStorage
export const getCurrentUser = (): string => {
  return localStorage.getItem('energiekrieg_user') || '';
};

// Holt ein gespeichertes Deck für den aktuellen Benutzer
export const getDeckByUser = (user: string): Deck | null => {
  const raw = localStorage.getItem(`deck_${user}`);
  return raw ? JSON.parse(raw) : null;
};

// Speichert ein Deck für den aktuellen Benutzer
export const saveDeck = (user: string, name: string, cards: CardData[]) => {
  const deck: Deck = { name, cards };
  localStorage.setItem(`deck_${user}`, JSON.stringify(deck));
};

// Löscht ein gespeichertes Deck
export const deleteDeck = (user: string) => {
  localStorage.removeItem(`deck_${user}`);
};
