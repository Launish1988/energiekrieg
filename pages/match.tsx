// pages/match.tsx

import React, { useState, useEffect } from 'react';
import GameBoard from '@/components/GameBoard';
import { allCards } from '@/lib/cards';
import { useMatchFlow } from '@/lib/matchflow';

const getDeckFromLocalStorage = () => {
  const savedDeck = JSON.parse(localStorage.getItem('decks') || '[]');
  const selected = savedDeck[0];
  if (!selected) return [];
  return selected.cards
    .map((id: string) => allCards.find(c => c.id === id))
    .filter(Boolean);
};

export default function MatchPage() {
  const { currentPlayer, turnTime, manuallyEndTurn } = useMatchFlow();

  const [playerDeck, setPlayerDeck] = useState<any[]>([]);
  const [playerHand, setPlayerHand] = useState<any[]>([]);
  const [playerHealth, setPlayerHealth] = useState(30);
  const [opponentHealth, setOpponentHealth] = useState(30);
  const [playerMana, setPlayerMana] = useState(1);

  useEffect(() => {
    const deck = getDeckFromLocalStorage();
    setPlayerDeck(deck);
    setPlayerHand(deck.slice(0, 3)); // Starthand
  }, []);

  const handleCardPlay = (cardId: string) => {
    const card = playerHand.find(c => c.id === cardId);
    if (!card || card.cost > playerMana) return;

    setPlayerMana(prev => prev - card.cost);
    setPlayerHand(prev => prev.filter(c => c.id !== cardId));
    setPlayerDeck(prev => prev.slice(1)); // Ziehe neue nach (vereinfacht)

    // Mechaniken anwenden (z. B. draw, battlecry etc.)
    if (card.mechanics?.includes('draw') && playerDeck.length > 0) {
      const nextCard = playerDeck[0];
      setPlayerHand(prev => [...prev, nextCard]);
    }

    if (card.mechanics?.includes('battlecry')) {
      setOpponentHealth(prev => Math.max(0, prev - 2)); // Beispiel
    }
  };

  return (
    <main className="game-container">
      <h1>Energiekrieg ⚡ – 1vs1 Match</h1>
      <p>Spieler am Zug: {currentPlayer}</p>
      <p>Zeit: {turnTime}s</p>
      <button onClick={manuallyEndTurn}>🔥 Zug beenden</button>

      <GameBoard
        playerHand={playerHand}
        opponentHand={3}
        playerHealth={playerHealth}
        opponentHealth={opponentHealth}
        playerMana={playerMana}
        onCardPlay={handleCardPlay}
        deckCount={playerDeck.length}
      />
    </main>
  );
}
