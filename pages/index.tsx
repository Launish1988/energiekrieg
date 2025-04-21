// pages/index.tsx

import React, { useState } from 'react';
import GameBoard from '@/components/GameBoard';
import { useMatchFlow } from '@/lib/matchflow';

const mockHand = [
  {
    id: 'card1',
    name: 'Waldgeist',
    cost: 2,
    attack: 3,
    health: 2,
    description: 'Zieht eine Karte.',
    image: '/cards/placeholder.jpg',
  },
  {
    id: 'card2',
    name: 'Sturmwolf',
    cost: 4,
    attack: 5,
    health: 4,
    description: 'Eile. Kann sofort angreifen.',
    image: '/cards/placeholder.jpg',
  },
];

export default function Home() {
  const { currentPlayer, turnTime, manuallyEndTurn } = useMatchFlow();
  const [playerHealth, setPlayerHealth] = useState(30);
  const [opponentHealth, setOpponentHealth] = useState(30);
  const [playerMana, setPlayerMana] = useState(1);

  const handleCardPlay = (cardId: string) => {
    console.log(`Karte gespielt: ${cardId}`);
    setPlayerMana((mana) => Math.max(0, mana - 2));
  };

  return (
    <main className="game-container">
      <h1>Energiekrieg ⚡</h1>
      <p>Spieler am Zug: {currentPlayer}</p>
      <p>Zeit: {turnTime}s</p>
      <button onClick={manuallyEndTurn}>🔥 Zug beenden</button>

      <GameBoard
        playerHand={mockHand}
        opponentHand={3}
        playerHealth={playerHealth}
        opponentHealth={opponentHealth}
        playerMana={playerMana}
        onCardPlay={handleCardPlay}
      />
    </main>
  );
}
