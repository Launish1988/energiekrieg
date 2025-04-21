import React from 'react';

type CardProps = {
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
};

const Card = ({ name, cost, attack, health, description }: CardProps) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Kosten: {cost}</p>
      <p>Angriff: {attack}</p>
      <p>Leben: {health}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;