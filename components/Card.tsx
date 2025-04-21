import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/globals.css';

type CardProps = {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
  image: string;
  onPlay?: (cardId: string) => void;
  isPlayable?: boolean;
  glow?: boolean;
};

const Card = ({
  id,
  name,
  cost,
  attack,
  health,
  description,
  image,
  onPlay,
  isPlayable = false,
  glow = false,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isPlayable && onPlay) {
      onPlay(id);
    }
  };

  return (
    <div
      className={`card-container ${glow ? 'glow' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-frame">
        <div className="mana-cost">{cost}</div>
        <Image src={image} alt={name} width={120} height={160} className="card-art" />
        <div className="card-title">{name}</div>
        <div className="card-description">{description}</div>
        <div className="card-stats">
          <span className="attack">{attack}</span>
          <span className="health">{health}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
