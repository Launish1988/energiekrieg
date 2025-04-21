
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
    name: 'Waldhauch',
    cost: 1,
    attack: 1,
    health: 2,
    description: 'Zieht eine Karte.',
    image: '/cards/001.jpg',
    class: 'Naturrufer',
    rarity: 'common',
    mechanics: ['draw']
  },
  {
    id: '002',
    name: 'Rindenhaut-Schützer',
    cost: 2,
    attack: 2,
    health: 3,
    description: 'Schild (Spott).',
    image: '/cards/002.jpg',
    class: 'Naturrufer',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '003',
    name: 'Lebenswurzel',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Stellt 4 Leben wieder her.',
    image: '/cards/003.jpg',
    class: 'Naturrufer',
    rarity: 'common',
    mechanics: ['heal']
  },
  {
    id: '004',
    name: 'Zornklinge',
    cost: 2,
    attack: 3,
    health: 2,
    description: 'Ansturm.',
    image: '/cards/004.jpg',
    class: 'Klingenmeister',
    rarity: 'common',
    mechanics: ['rush']
  },
  {
    id: '005',
    name: 'Magmaschlag',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 6 Schaden.',
    image: '/cards/005.jpg',
    class: 'Elementarwirker',
    rarity: 'rare',
    mechanics: ['damage']
  },
  {
    id: '006',
    name: 'Lichtnova',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden an allen Feinden.',
    image: '/cards/006.jpg',
    class: 'Lichtwächter',
    rarity: 'rare',
    mechanics: ['aoe']
  },
  {
    id: '007',
    name: 'Schattengeist',
    cost: 3,
    attack: 3,
    health: 4,
    description: 'Beim Ausspielen: Gegner verliert 2 Leben.',
    image: '/cards/007.jpg',
    class: 'Schattenwirker',
    rarity: 'rare',
    mechanics: ['battlecry']
  },
  {
    id: '008',
    name: 'Windwandler',
    cost: 1,
    attack: 1,
    health: 1,
    description: 'Doppelschlag (Greift zweimal an).',
    image: '/cards/008.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'epic',
    mechanics: ['windfury']
  },
  {
    id: '009',
    name: 'Klingenhexe',
    cost: 3,
    attack: 4,
    health: 3,
    description: 'Kampfschrei: Fügt einem Gegner 3 Schaden zu.',
    image: '/cards/009.jpg',
    class: 'Klingenläufer',
    rarity: 'rare',
    mechanics: ['battlecry']
  },
  {
    id: '010',
    name: 'Auge des Waldes',
    cost: 2,
    attack: 2,
    health: 2,
    description: 'Ziehe 2 Karten.',
    image: '/cards/010.jpg',
    class: 'Waldhüter',
    rarity: 'common',
    mechanics: ['draw']
  },
  {
    id: '011',
    name: 'Dämonenstoß',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden.',
    image: '/cards/011.jpg',
    class: 'Seelenmeister',
    rarity: 'common',
    mechanics: ['damage']
  },
  {
    id: '012',
    name: 'Kristallheiler',
    cost: 4,
    attack: 3,
    health: 5,
    description: 'Heilt 3 Leben bei allen Verbündeten.',
    image: '/cards/012.jpg',
    class: 'Lichtwächter',
    rarity: 'epic',
    mechanics: ['aoe', 'heal']
  },
  {
    id: '013',
    name: 'Nebelkrieger',
    cost: 2,
    attack: 3,
    health: 1,
    description: 'Verborgensein.',
    image: '/cards/013.jpg',
    class: 'Klingenläufer',
    rarity: 'common',
    mechanics: ['stealth']
  },
  {
    id: '014',
    name: 'Runenwächter',
    cost: 5,
    attack: 4,
    health: 6,
    description: 'Schild.',
    image: '/cards/014.jpg',
    class: 'Lichtwächter',
    rarity: 'rare',
    mechanics: ['taunt']
  },
  {
    id: '015',
    name: 'Flammenbote',
    cost: 3,
    attack: 3,
    health: 3,
    description: 'Zauberschaden +1.',
    image: '/cards/015.jpg',
    class: 'Elementarwirker',
    rarity: 'common',
    mechanics: ['spellpower']
  },
  {
    id: '016',
    name: 'Todeshauch',
    cost: 4,
    attack: 2,
    health: 4,
    description: 'Todesröcheln: Verursacht 2 Schaden an allen Gegnern.',
    image: '/cards/016.jpg',
    class: 'Schattenwirker',
    rarity: 'epic',
    mechanics: ['deathrattle']
  },
  {
    id: '017',
    name: 'Seelenbrenner',
    cost: 5,
    attack: 5,
    health: 4,
    description: 'Beim Ausspielen: Ziehe eine Karte.',
    image: '/cards/017.jpg',
    class: 'Seelenmeister',
    rarity: 'rare',
    mechanics: ['battlecry', 'draw']
  },
  {
    id: '018',
    name: 'Donnerfaust',
    cost: 3,
    attack: 4,
    health: 2,
    description: 'Ansturm.',
    image: '/cards/018.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'common',
    mechanics: ['rush']
  },
  {
    id: '019',
    name: 'Wachposten',
    cost: 2,
    attack: 1,
    health: 4,
    description: 'Schild.',
    image: '/cards/019.jpg',
    class: 'Klingenmeister',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '020',
    name: 'Lichtfunken',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Heilt 2 Leben.',
    image: '/cards/020.jpg',
    class: 'Lichtwächter',
    rarity: 'common',
    mechanics: ['heal']
  }
];
