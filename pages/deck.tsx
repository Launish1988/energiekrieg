import React, { useState, useEffect } from 'react';
import { getAllCards } from '@/lib/cards';
import { saveDeck, getDeckByUser } from '@/lib/decks';

const DeckBuilder = () => {
  const [availableCards, setAvailableCards] = useState<any[]>([]);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [deckName, setDeckName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('energiekrieg_user') || '';
    setUsername(user);

    const cards = getAllCards(); // Importierte Karten
    setAvailableCards(cards);

    const savedDeck = getDeckByUser(user);
    if (savedDeck) {
      setSelectedCards(savedDeck.cards);
      setDeckName(savedDeck.name);
    }
  }, []);

  const toggleCard = (card: any) => {
    const alreadySelected = selectedCards.find((c) => c.id === card.id);
    if (alreadySelected) {
      setSelectedCards((prev) => prev.filter((c) => c.id !== card.id));
    } else {
      if (selectedCards.length < 30) {
        setSelectedCards((prev) => [...prev, card]);
      } else {
        alert('Du kannst maximal 30 Karten im Deck haben!');
      }
    }
  };

  const handleSaveDeck = () => {
    if (!deckName || selectedCards.length !== 30) {
      alert('Bitte gib einen Namen ein und wähle genau 30 Karten aus.');
      return;
    }

    saveDeck(username, deckName, selectedCards);
    alert('Deck gespeichert!');
  };

  return (
    <div className="deck-builder">
      <h1>🛠 Deck erstellen</h1>

      <input
        type="text"
        placeholder="Name deines Decks"
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
      />

      <div className="card-pool">
        {availableCards.map((card) => (
          <div
            key={card.id}
            className={`card-tile ${selectedCards.find((c) => c.id === card.id) ? 'selected' : ''}`}
            onClick={() => toggleCard(card)}
          >
            <strong>{card.name}</strong>
            <p>{card.cost} Mana</p>
            <p>{card.attack}/{card.health}</p>
          </div>
        ))}
      </div>

      <p>Ausgewählt: {selectedCards.length} / 30</p>

      <button onClick={handleSaveDeck}>💾 Deck speichern</button>
    </div>
  );
};

export default DeckBuilder;
