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
  // … Karten 004–030 ausgelassen (Platzhalter oder bereits eingefügt)
  {
    id: '031',
    name: 'Blutflamme',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden am gegnerischen Helden.',
    image: '/cards/031.jpg',
    class: 'Seelenmeister',
    rarity: 'common'
  },
  {
    id: '032',
    name: 'Lichtbringerin',
    cost: 2,
    attack: 1,
    health: 4,
    description: 'Schild',
    image: '/cards/032.jpg',
    class: 'Lichtwächter',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '033',
    name: 'Runenschlag',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 6 Schaden.',
    image: '/cards/033.jpg',
    class: 'Elementarwirker',
    rarity: 'common'
  },
  {
    id: '034',
    name: 'Wildbiss',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Verleiht einem Diener +2 Angriff.',
    image: '/cards/034.jpg',
    class: 'Naturrufer',
    rarity: 'common'
  },
  {
    id: '035',
    name: 'Knochenschnitter',
    cost: 4,
    attack: 4,
    health: 3,
    description: '',
    image: '/cards/035.jpg',
    class: 'Klingenmeister',
    rarity: 'common'
  },
  {
    id: '036',
    name: 'Wurzelschlag',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Fügt 3 Schaden zu.',
    image: '/cards/036.jpg',
    class: 'Naturrufer',
    rarity: 'common'
  },
  {
    id: '037',
    name: 'Glutnova',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Verursacht 1 Schaden an allen Feinden.',
    image: '/cards/037.jpg',
    class: 'Elementarwirker',
    rarity: 'common'
  },
  {
    id: '038',
    name: 'Dämmerfaust',
    cost: 5,
    attack: 5,
    health: 5,
    description: '',
    image: '/cards/038.jpg',
    class: 'Klingenmeister',
    rarity: 'rare'
  },
  {
    id: '039',
    name: 'Schattenmantel',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Ein Diener kann in dieser Runde nicht angegriffen werden.',
    image: '/cards/039.jpg',
    class: 'Schattenwirker',
    rarity: 'common'
  },
  {
    id: '040',
    name: 'Schlammspucker',
    cost: 3,
    attack: 3,
    health: 4,
    description: 'Schild',
    image: '/cards/040.jpg',
    class: 'Neutral',
    rarity: 'common',
    mechanics: ['taunt']
  },
  {
    id: '041',
    name: 'Wüstenwolf',
    cost: 2,
    attack: 3,
    health: 2,
    description: '',
    image: '/cards/041.jpg',
    class: 'Waldhüter',
    rarity: 'common'
  },
  {
    id: '042',
    name: 'Heiliger Blitz',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Verursacht 2 Schaden.',
    image: '/cards/042.jpg',
    class: 'Lichtwächter',
    rarity: 'common'
  },
  {
    id: '043',
    name: 'Zwillingsdolch',
    cost: 2,
    attack: 2,
    health: 1,
    description: '',
    image: '/cards/043.jpg',
    class: 'Klingenläufer',
    rarity: 'common'
  },
  {
    id: '044',
    name: 'Donnerodem',
    cost: 6,
    attack: 0,
    health: 0,
    description: 'Fügt allen Gegnern 4 Schaden zu.',
    image: '/cards/044.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'epic'
  },
  {
    id: '045',
    name: 'Wolkenbiss',
    cost: 3,
    attack: 3,
    health: 3,
    description: '',
    image: '/cards/045.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'common'
  },
  {
    id: '046',
    name: 'Todeshauch',
    cost: 5,
    attack: 5,
    health: 6,
    description: '',
    image: '/cards/046.jpg',
    class: 'Schattenwirker',
    rarity: 'rare'
  },
  {
    id: '047',
    name: 'Schattenentzug',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Stellt 3 Leben wieder her.',
    image: '/cards/047.jpg',
    class: 'Schattenwirker',
    rarity: 'common'
  },
  {
    id: '048',
    name: 'Kettenblitz',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 3 Schaden an einem Gegner und springt über.',
    image: '/cards/048.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'rare'
  },
  {
    id: '049',
    name: 'Hirschgeist',
    cost: 4,
    attack: 4,
    health: 5,
    description: '',
    image: '/cards/049.jpg',
    class: 'Naturrufer',
    rarity: 'rare'
  },
  {
    id: '050',
    name: 'Lichtblitz',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Verursacht 3 Schaden an einem Ziel.',
    image: '/cards/050.jpg',
    class: 'Lichtwächter',
    rarity: 'common'
  },
  {
    id: '051',
    name: 'Schattendolch',
    cost: 3,
    attack: 3,
    health: 1,
    description: '',
    image: '/cards/051.jpg',
    class: 'Klingenläufer',
    rarity: 'common'
  },
  {
    id: '052',
    name: 'Krähenjäger',
    cost: 4,
    attack: 4,
    health: 4,
    description: '',
    image: '/cards/052.jpg',
    class: 'Waldhüter',
    rarity: 'common'
  },
  {
    id: '053',
    name: 'Verhexung',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Verwandelt einen Gegner in ein Schaf.',
    image: '/cards/053.jpg',
    class: 'Sturmbeschwörer',
    rarity: 'epic'
  },
  {
    id: '054',
    name: 'Druidenzauber',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Verleiht einem Diener +1/+1.',
    image: '/cards/054.jpg',
    class: 'Naturrufer',
    rarity: 'common'
  },
  {
    id: '055',
    name: 'Seelenfeuer',
    cost: 1,
    attack: 0,
    health: 0,
    description: 'Verursacht 4 Schaden.',
    image: '/cards/055.jpg',
    class: 'Seelenmeister',
    rarity: 'rare'
  },
  {
    id: '056',
    name: 'Hammerschlag',
    cost: 5,
    attack: 5,
    health: 5,
    description: '',
    image: '/cards/056.jpg',
    class: 'Klingenmeister',
    rarity: 'common'
  },
  {
    id: '057',
    name: 'Vergessene Runen',
    cost: 2,
    attack: 0,
    health: 0,
    description: 'Ziehe 2 Karten.',
    image: '/cards/057.jpg',
    class: 'Elementarwirker',
    rarity: 'common',
    mechanics: ['draw']
  },
  {
    id: '058',
    name: 'Flammensturm',
    cost: 7,
    attack: 0,
    health: 0,
    description: 'Fügt allen feindlichen Dienern 4 Schaden zu.',
    image: '/cards/058.jpg',
    class: 'Elementarwirker',
    rarity: 'epic'
  },
  {
    id: '059',
    name: 'Höllenfeuer',
    cost: 4,
    attack: 0,
    health: 0,
    description: 'Verursacht 3 Schaden an allen Charakteren.',
    image: '/cards/059.jpg',
    class: 'Seelenmeister',
    rarity: 'epic'
  },
  {
    id: '060',
    name: 'Frostnova',
    cost: 3,
    attack: 0,
    health: 0,
    description: 'Friert alle feindlichen Diener ein.',
    image: '/cards/060.jpg',
    class: 'Elementarwirker',
    rarity: 'common'
  }
];
