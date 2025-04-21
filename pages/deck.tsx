import React, { useState } from 'react';
import { allCards, CardData } from '../lib/cards';
import styles from '../styles/globals.css';

const MAX_DECK_SIZE = 30;

const DeckBuilder = () => {
  const [deckName, setDeckName] = useState('');
  const [deck, setDeck] = useState<CardData[]>([]);

  const toggleCardInDeck = (card: CardData) => {
    const exists = deck.find(c => c.id === card.id);

    if (exists) {
      setDeck(deck.filter(c => c.id !== card.id));
    } else if (deck.length < MAX_DECK_SIZE) {
      setDeck([...deck, card]);
    }
  };

  const handleSave = () => {
    if (deck.length !== MAX_DECK_SIZE || !deckName) {
      alert('Bitte gib einen Namen ein und wähle genau 30 Karten.');
      return;
    }

    const savedDecks = JSON.parse(localStorage.getItem('decks') || '[]');
    if (savedDecks.length >= 3) {
      alert('Du kannst nur 3 Decks speichern.');
      return;
    }

    savedDecks.push({ name: deckName, cards: deck });
    localStorage.setItem('decks', JSON.stringify(savedDecks));
    alert('Deck gespeichert!');
    setDeck([]);
    setDeckName('');
  };

  return (
    <div className="deck-builder">
      <h1>Deck erstellen</h1>
      <input
        type="text"
        placeholder="Deckname"
        value={deckName}
        onChange={e => setDeckName(e.target.value)}
      />
      <p>{deck.length} / {MAX_DECK_SIZE} Karten</p>
      <div className="card-pool">
        {allCards.map(card => (
          <div
            key={card.id}
            className={`card-tile ${deck.find(c => c.id === card.id) ? 'selected' : ''}`}
            onClick={() => toggleCardInDeck(card)}
          >
            <p>{card.name}</p>
            <small>Kosten: {card.cost}</small>
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Deck speichern</button>
    </div>
  );
};

export default DeckBuilder;
