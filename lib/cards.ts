// lib/cards.ts

export type CardData = {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
  image: string;
  class: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  mechanics?: string[];
};

export const allCards: CardData[] = [
  {
    id: '001',
    name: 'Waldgeist',
    cost: 1,
    attack: 1,
    health: 2,
    description: 'Zieht eine Karte.',
    image: '/cards/001.jpg',
    class: 'Naturrufer',
    rarity: 'common',
    mechanics: ['draw'],
  },
  {
    id: '002',
    name: 'Blitzwolf',
    cost: 3,
    attack: 4,
    health: 3,
    description: 'Ansturm',
    image: '/cards/002.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'rare',
    mechanics: ['rush'],
  },
  {
    id: '003',
    name: 'Seelenpeitscher',
    cost: 2,
    attack: 2,
    health: 2,
    description: 'Beim Ausspielen: Gegner verliert 2 Leben.',
    image: '/cards/003.jpg',
    class: 'Seelenmeister',
    rarity: 'common',
    mechanics: ['battlecry'],
  },
  // Bald folgen alle weiteren Karten...
];
