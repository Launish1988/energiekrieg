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
    name: 'Waldflimmer',
    cost: 0,
    attack: 1,
    health: 1,
    description: 'Ein einfacher Lichtgeist.',
    image: '/cards/placeholder.jpg',
    class: 'Neutral',
    rarity: 'common'
  },
  {
    id: '002',
    name: 'Mondkrähe',
    cost: 1,
    attack: 2,
    health: 1,
    description: 'Schneller Luftangreifer.',
    image: '/cards/placeholder.jpg',
    class: 'Neutral',
    rarity: 'common'
  },
  {
    id: '003',
    name: 'Wächter des Lichts',
    cost: 1,
    attack: 1,
    health: 2,
    description: 'Schild (Kann Gegner blockieren).',
    image: '/cards/placeholder.jpg',
    class: 'Neutral',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '004',
    name: 'Funkenzauber',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Verursacht 1 Schaden.',
    image: '/cards/placeholder.jpg',
    class: 'Elementarwirker',
    rarity: 'common'
  },
  {
    id: '005',
    name: 'Kleiner Panther',
    cost: 2,
    attack: 3,
    health: 2,
    description: '',
    image: '/cards/placeholder.jpg',
    class: 'Neutral',
    rarity: 'common'
  },
  {
    id: '006',
    name: 'Heillicht',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Stellt 3 Leben wieder her.',
    image: '/cards/placeholder.jpg',
    class: 'Lichtwächter',
    rarity: 'common'
  },
  {
    id: '007',
    name: 'Klingenkriecher',
    cost: 2,
    attack: 2,
    health: 3,
    description: '',
    image: '/cards/placeholder.jpg',
    class: 'Klingenmeister',
    rarity: 'common'
  },
  {
    id: '008',
    name: 'Lichtjunges',
    cost: 3,
    attack: 3,
    health: 4,
    description: '',
    image: '/cards/placeholder.jpg',
    class: 'Lichtwächter',
    rarity: 'common'
  },
  {
    id: '009',
    name: 'Blitzschock',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Verursacht 3 Schaden an einem Ziel.',
    image: '/cards/placeholder.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'rare'
  },
  {
    id: '010',
    name: 'Schattenklinge',
    cost: 3,
    attack: 4,
    health: 2,
    description: '',
    image: '/cards/placeholder.jpg',
    class: 'Klingenläufer',
    rarity: 'common'
  },
  {
    id: '011',
    name: 'Aderlass',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden. Heilt dich um 2.',
    image: '/cards/placeholder.jpg',
    class: 'Seelenmeister',
    rarity: 'rare'
  },
  {
    id: '012',
    name: 'Waldwache',
    cost: 4,
    attack: 3,
    health: 5,
    description: 'Schild',
    image: '/cards/placeholder.jpg',
    class: 'Waldhüter',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '013',
    name: 'Energieritual',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Ziehe 2 Karten.',
    image: '/cards/placeholder.jpg',
    class: 'Schattenwirker',
    rarity: 'common',
    mechanics: ['draw']
  },
  {
    id: '014',
    name: 'Waldwolf',
    cost: 4,
    attack: 5,
    health: 4,
    description: '',
    image: '/cards/placeholder.jpg',
    class: 'Waldhüter',
    rarity: 'common'
  },
  {
    id: '015',
    name: 'Donnerfaust',
    cost: 5,
    attack: 6,
    health: 5,
    description: 'Eile (Kann sofort angreifen)',
    image: '/cards/placeholder.jpg',
    class: 'Klingenmeister',
    rarity: 'rare',
    mechanics: ['charge']
  }
  // Fortsetzung folgt (IDs 016–030)
];

