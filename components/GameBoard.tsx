import React from 'react';
import Card from './Card';

type CardType = {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
  image: string;
};

type GameBoardProps = {
  playerHand: CardType[];
  opponentHand: number;
  playerHealth: number;
  opponentHealth: number;
  playerMana: number;
  onCardPlay: (cardId: string) => void;
};

const GameBoard = ({
  playerHand,
  opponentHand,
  playerHealth,
  opponentHealth,
  playerMana,
  onCardPlay,
}: GameBoardProps) => {
  return (
    <div className="game-board">
      <div className="opponent-info">
        <p>Gegner Leben: {opponentHealth}</p>
        <p>Karten in der Hand: {opponentHand}</p>
      </div>

      <div className="board-center">
        {/* Platz für späteres Spielfeld mit gespielten Karten */}
      </div>

      <div className="player-info">
        <p>Dein Leben: {playerHealth}</p>
        <p>Mana: {playerMana}</p>
      </div>

      <div className="hand">
        {playerHand.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            cost={card.cost}
            attack={card.attack}
            health={card.health}
            description={card.description}
            image={card.image}
            onPlay={onCardPlay}
            isPlayable={card.cost <= playerMana}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
