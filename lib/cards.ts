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
   {
    id: '016',
    name: 'Runenwandler',
    cost: 3,
    attack: 3,
    health: 3,
    description: 'Beim Ausspielen: Erhält +1 Angriff.',
    image: '/cards/016.jpg',
    class: 'Klingenläufer',
    rarity: 'common',
    mechanics: ['battlecry']
  },
  {
    id: '017',
    name: 'Windfokus',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Ziehe eine Karte.',
    image: '/cards/017.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'common',
    mechanics: ['draw']
  },
  {
    id: '018',
    name: 'Seelenschmied',
    cost: 4,
    attack: 5,
    health: 4,
    description: '',
    image: '/cards/018.jpg',
    class: 'Seelenmeister',
    rarity: 'common'
  },
  {
    id: '019',
    name: 'Lichtschlag',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 6 Schaden.',
    image: '/cards/019.jpg',
    class: 'Elementarwirker',
    rarity: 'common'
  },
  {
    id: '020',
    name: 'Schutzgeist',
    cost: 3,
    attack: 1,
    health: 6,
    description: 'Schild',
    image: '/cards/020.jpg',
    class: 'Lichtwächter',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '021',
    name: 'Wilder Wächter',
    cost: 2,
    attack: 2,
    health: 2,
    description: 'Ruhelose Naturgewalt.',
    image: '/cards/021.jpg',
    class: 'Waldhüter',
    rarity: 'common'
  },
  {
    id: '022',
    name: 'Glefe der Schatten',
    cost: 5,
    attack: 5,
    health: 6,
    description: '',
    image: '/cards/022.jpg',
    class: 'Schattenwirker',
    rarity: 'rare'
  },
  {
    id: '023',
    name: 'Sturmruf',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden an allen Feinden.',
    image: '/cards/023.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'epic'
  },
  {
    id: '024',
    name: 'Heilende Woge',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Stellt 6 Leben wieder her.',
    image: '/cards/024.jpg',
    class: 'Lichtwächter',
    rarity: 'common'
  },
  {
    id: '025',
    name: 'Dämmerungswächter',
    cost: 4,
    attack: 4,
    health: 4,
    description: '',
    image: '/cards/025.jpg',
    class: 'Neutral',
    rarity: 'common'
  },
  {
    id: '026',
    name: 'Geisterzunge',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Erhält +1 Angriff.',
    image: '/cards/026.jpg',
    class: 'Seelenmeister',
    rarity: 'common'
  },
  {
    id: '027',
    name: 'Panthergeist',
    cost: 3,
    attack: 4,
    health: 2,
    description: '',
    image: '/cards/027.jpg',
    class: 'Waldhüter',
    rarity: 'common'
  },
  {
    id: '028',
    name: 'Flammenzorn',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden an allen Dienern.',
    image: '/cards/028.jpg',
    class: 'Elementarwirker',
    rarity: 'epic'
  },
  {
    id: '029',
    name: 'Wutklinge',
    cost: 5,
    attack: 7,
    health: 4,
    description: '',
    image: '/cards/029.jpg',
    class: 'Klingenläufer',
    rarity: 'rare'
  },
  {
    id: '030',
    name: 'Donnerklaue',
    cost: 6,
    attack: 6,
    health: 7,
    description: 'Schild',
    image: '/cards/030.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'rare',
    mechanics: ['taunt']
  }
];

