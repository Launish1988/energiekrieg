
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
    name: 'Karte 1',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 1.',
    image: '/cards/001.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '002',
    name: 'Karte 2',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 2.',
    image: '/cards/002.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '003',
    name: 'Karte 3',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 3.',
    image: '/cards/003.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '004',
    name: 'Karte 4',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 4.',
    image: '/cards/004.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '005',
    name: 'Karte 5',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 5.',
    image: '/cards/005.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '006',
    name: 'Karte 6',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 6.',
    image: '/cards/006.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '007',
    name: 'Karte 7',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 7.',
    image: '/cards/007.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '008',
    name: 'Karte 8',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 8.',
    image: '/cards/008.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '009',
    name: 'Karte 9',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 9.',
    image: '/cards/009.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '010',
    name: 'Karte 10',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 10.',
    image: '/cards/010.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '011',
    name: 'Karte 11',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 11.',
    image: '/cards/011.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '012',
    name: 'Karte 12',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 12.',
    image: '/cards/012.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '013',
    name: 'Karte 13',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 13.',
    image: '/cards/013.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '014',
    name: 'Karte 14',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 14.',
    image: '/cards/014.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '015',
    name: 'Karte 15',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 15.',
    image: '/cards/015.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '016',
    name: 'Karte 16',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 16.',
    image: '/cards/016.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '017',
    name: 'Karte 17',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 17.',
    image: '/cards/017.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '018',
    name: 'Karte 18',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 18.',
    image: '/cards/018.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '019',
    name: 'Karte 19',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 19.',
    image: '/cards/019.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '020',
    name: 'Karte 20',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 20.',
    image: '/cards/020.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '021',
    name: 'Karte 21',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 21.',
    image: '/cards/021.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '022',
    name: 'Karte 22',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 22.',
    image: '/cards/022.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '023',
    name: 'Karte 23',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 23.',
    image: '/cards/023.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '024',
    name: 'Karte 24',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 24.',
    image: '/cards/024.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '025',
    name: 'Karte 25',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 25.',
    image: '/cards/025.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '026',
    name: 'Karte 26',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 26.',
    image: '/cards/026.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '027',
    name: 'Karte 27',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 27.',
    image: '/cards/027.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '028',
    name: 'Karte 28',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 28.',
    image: '/cards/028.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '029',
    name: 'Karte 29',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 29.',
    image: '/cards/029.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '030',
    name: 'Karte 30',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 30.',
    image: '/cards/030.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '031',
    name: 'Karte 31',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 31.',
    image: '/cards/031.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '032',
    name: 'Karte 32',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 32.',
    image: '/cards/032.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '033',
    name: 'Karte 33',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 33.',
    image: '/cards/033.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '034',
    name: 'Karte 34',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 34.',
    image: '/cards/034.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '035',
    name: 'Karte 35',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 35.',
    image: '/cards/035.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '036',
    name: 'Karte 36',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 36.',
    image: '/cards/036.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '037',
    name: 'Karte 37',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 37.',
    image: '/cards/037.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '038',
    name: 'Karte 38',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 38.',
    image: '/cards/038.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '039',
    name: 'Karte 39',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 39.',
    image: '/cards/039.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '040',
    name: 'Karte 40',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 40.',
    image: '/cards/040.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '041',
    name: 'Karte 41',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 41.',
    image: '/cards/041.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '042',
    name: 'Karte 42',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 42.',
    image: '/cards/042.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '043',
    name: 'Karte 43',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 43.',
    image: '/cards/043.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '044',
    name: 'Karte 44',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 44.',
    image: '/cards/044.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '045',
    name: 'Karte 45',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 45.',
    image: '/cards/045.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '046',
    name: 'Karte 46',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 46.',
    image: '/cards/046.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '047',
    name: 'Karte 47',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 47.',
    image: '/cards/047.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '048',
    name: 'Karte 48',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 48.',
    image: '/cards/048.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '049',
    name: 'Karte 49',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 49.',
    image: '/cards/049.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '050',
    name: 'Karte 50',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 50.',
    image: '/cards/050.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '051',
    name: 'Karte 51',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 51.',
    image: '/cards/051.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '052',
    name: 'Karte 52',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 52.',
    image: '/cards/052.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '053',
    name: 'Karte 53',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 53.',
    image: '/cards/053.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '054',
    name: 'Karte 54',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 54.',
    image: '/cards/054.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '055',
    name: 'Karte 55',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 55.',
    image: '/cards/055.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '056',
    name: 'Karte 56',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 56.',
    image: '/cards/056.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '057',
    name: 'Karte 57',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 57.',
    image: '/cards/057.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '058',
    name: 'Karte 58',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 58.',
    image: '/cards/058.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '059',
    name: 'Karte 59',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 59.',
    image: '/cards/059.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '060',
    name: 'Karte 60',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 60.',
    image: '/cards/060.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

,{
    id: '061',
    name: 'Karte 61',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 61.',
    image: '/cards/061.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '062',
    name: 'Karte 62',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 62.',
    image: '/cards/062.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '063',
    name: 'Karte 63',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 63.',
    image: '/cards/063.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '064',
    name: 'Karte 64',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 64.',
    image: '/cards/064.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '065',
    name: 'Karte 65',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 65.',
    image: '/cards/065.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '066',
    name: 'Karte 66',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 66.',
    image: '/cards/066.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '067',
    name: 'Karte 67',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 67.',
    image: '/cards/067.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '068',
    name: 'Karte 68',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 68.',
    image: '/cards/068.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '069',
    name: 'Karte 69',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 69.',
    image: '/cards/069.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '070',
    name: 'Karte 70',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 70.',
    image: '/cards/070.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '071',
    name: 'Karte 71',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 71.',
    image: '/cards/071.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '072',
    name: 'Karte 72',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 72.',
    image: '/cards/072.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '073',
    name: 'Karte 73',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 73.',
    image: '/cards/073.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '074',
    name: 'Karte 74',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 74.',
    image: '/cards/074.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '075',
    name: 'Karte 75',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 75.',
    image: '/cards/075.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '076',
    name: 'Karte 76',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 76.',
    image: '/cards/076.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '077',
    name: 'Karte 77',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 77.',
    image: '/cards/077.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '078',
    name: 'Karte 78',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 78.',
    image: '/cards/078.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '079',
    name: 'Karte 79',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 79.',
    image: '/cards/079.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '080',
    name: 'Karte 80',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 80.',
    image: '/cards/080.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '081',
    name: 'Karte 81',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 81.',
    image: '/cards/081.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '082',
    name: 'Karte 82',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 82.',
    image: '/cards/082.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '083',
    name: 'Karte 83',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 83.',
    image: '/cards/083.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '084',
    name: 'Karte 84',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 84.',
    image: '/cards/084.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '085',
    name: 'Karte 85',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 85.',
    image: '/cards/085.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '086',
    name: 'Karte 86',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 86.',
    image: '/cards/086.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '087',
    name: 'Karte 87',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 87.',
    image: '/cards/087.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '088',
    name: 'Karte 88',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 88.',
    image: '/cards/088.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '089',
    name: 'Karte 89',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 89.',
    image: '/cards/089.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '090',
    name: 'Karte 90',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 90.',
    image: '/cards/090.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '091',
    name: 'Karte 91',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 91.',
    image: '/cards/091.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '092',
    name: 'Karte 92',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 92.',
    image: '/cards/092.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '093',
    name: 'Karte 93',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 93.',
    image: '/cards/093.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '094',
    name: 'Karte 94',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 94.',
    image: '/cards/094.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '095',
    name: 'Karte 95',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 95.',
    image: '/cards/095.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '096',
    name: 'Karte 96',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 96.',
    image: '/cards/096.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '097',
    name: 'Karte 97',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 97.',
    image: '/cards/097.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '098',
    name: 'Karte 98',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 98.',
    image: '/cards/098.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '099',
    name: 'Karte 99',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 99.',
    image: '/cards/099.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '100',
    name: 'Karte 100',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 100.',
    image: '/cards/100.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '101',
    name: 'Karte 101',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 101.',
    image: '/cards/101.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '102',
    name: 'Karte 102',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 102.',
    image: '/cards/102.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '103',
    name: 'Karte 103',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 103.',
    image: '/cards/103.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '104',
    name: 'Karte 104',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 104.',
    image: '/cards/104.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '105',
    name: 'Karte 105',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 105.',
    image: '/cards/105.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '106',
    name: 'Karte 106',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 106.',
    image: '/cards/106.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '107',
    name: 'Karte 107',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 107.',
    image: '/cards/107.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '108',
    name: 'Karte 108',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 108.',
    image: '/cards/108.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '109',
    name: 'Karte 109',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 109.',
    image: '/cards/109.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '110',
    name: 'Karte 110',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 110.',
    image: '/cards/110.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '111',
    name: 'Karte 111',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 111.',
    image: '/cards/111.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '112',
    name: 'Karte 112',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 112.',
    image: '/cards/112.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '113',
    name: 'Karte 113',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 113.',
    image: '/cards/113.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '114',
    name: 'Karte 114',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 114.',
    image: '/cards/114.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '115',
    name: 'Karte 115',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 115.',
    image: '/cards/115.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '116',
    name: 'Karte 116',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 116.',
    image: '/cards/116.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '117',
    name: 'Karte 117',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 117.',
    image: '/cards/117.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '118',
    name: 'Karte 118',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 118.',
    image: '/cards/118.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '119',
    name: 'Karte 119',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 119.',
    image: '/cards/119.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '120',
    name: 'Karte 120',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 120.',
    image: '/cards/120.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

,{
    id: '121',
    name: 'Karte 121',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 121.',
    image: '/cards/121.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '122',
    name: 'Karte 122',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 122.',
    image: '/cards/122.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '123',
    name: 'Karte 123',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 123.',
    image: '/cards/123.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '124',
    name: 'Karte 124',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 124.',
    image: '/cards/124.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '125',
    name: 'Karte 125',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 125.',
    image: '/cards/125.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '126',
    name: 'Karte 126',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 126.',
    image: '/cards/126.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '127',
    name: 'Karte 127',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 127.',
    image: '/cards/127.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '128',
    name: 'Karte 128',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 128.',
    image: '/cards/128.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '129',
    name: 'Karte 129',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 129.',
    image: '/cards/129.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '130',
    name: 'Karte 130',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 130.',
    image: '/cards/130.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '131',
    name: 'Karte 131',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 131.',
    image: '/cards/131.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '132',
    name: 'Karte 132',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 132.',
    image: '/cards/132.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '133',
    name: 'Karte 133',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 133.',
    image: '/cards/133.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '134',
    name: 'Karte 134',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 134.',
    image: '/cards/134.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '135',
    name: 'Karte 135',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 135.',
    image: '/cards/135.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '136',
    name: 'Karte 136',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 136.',
    image: '/cards/136.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '137',
    name: 'Karte 137',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 137.',
    image: '/cards/137.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '138',
    name: 'Karte 138',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 138.',
    image: '/cards/138.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '139',
    name: 'Karte 139',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 139.',
    image: '/cards/139.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '140',
    name: 'Karte 140',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 140.',
    image: '/cards/140.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '141',
    name: 'Karte 141',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 141.',
    image: '/cards/141.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '142',
    name: 'Karte 142',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 142.',
    image: '/cards/142.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '143',
    name: 'Karte 143',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 143.',
    image: '/cards/143.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '144',
    name: 'Karte 144',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 144.',
    image: '/cards/144.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '145',
    name: 'Karte 145',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 145.',
    image: '/cards/145.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '146',
    name: 'Karte 146',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 146.',
    image: '/cards/146.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '147',
    name: 'Karte 147',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 147.',
    image: '/cards/147.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '148',
    name: 'Karte 148',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 148.',
    image: '/cards/148.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '149',
    name: 'Karte 149',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 149.',
    image: '/cards/149.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '150',
    name: 'Karte 150',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 150.',
    image: '/cards/150.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '151',
    name: 'Karte 151',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 151.',
    image: '/cards/151.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '152',
    name: 'Karte 152',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 152.',
    image: '/cards/152.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '153',
    name: 'Karte 153',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 153.',
    image: '/cards/153.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '154',
    name: 'Karte 154',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 154.',
    image: '/cards/154.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '155',
    name: 'Karte 155',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 155.',
    image: '/cards/155.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '156',
    name: 'Karte 156',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 156.',
    image: '/cards/156.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '157',
    name: 'Karte 157',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 157.',
    image: '/cards/157.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '158',
    name: 'Karte 158',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 158.',
    image: '/cards/158.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '159',
    name: 'Karte 159',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 159.',
    image: '/cards/159.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '160',
    name: 'Karte 160',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 160.',
    image: '/cards/160.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '161',
    name: 'Karte 161',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 161.',
    image: '/cards/161.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '162',
    name: 'Karte 162',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 162.',
    image: '/cards/162.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '163',
    name: 'Karte 163',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 163.',
    image: '/cards/163.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '164',
    name: 'Karte 164',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 164.',
    image: '/cards/164.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '165',
    name: 'Karte 165',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 165.',
    image: '/cards/165.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '166',
    name: 'Karte 166',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 166.',
    image: '/cards/166.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '167',
    name: 'Karte 167',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 167.',
    image: '/cards/167.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '168',
    name: 'Karte 168',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 168.',
    image: '/cards/168.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '169',
    name: 'Karte 169',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 169.',
    image: '/cards/169.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '170',
    name: 'Karte 170',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 170.',
    image: '/cards/170.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '171',
    name: 'Karte 171',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 171.',
    image: '/cards/171.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '172',
    name: 'Karte 172',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 172.',
    image: '/cards/172.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '173',
    name: 'Karte 173',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 173.',
    image: '/cards/173.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '174',
    name: 'Karte 174',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 174.',
    image: '/cards/174.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '175',
    name: 'Karte 175',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 175.',
    image: '/cards/175.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '176',
    name: 'Karte 176',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 176.',
    image: '/cards/176.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '177',
    name: 'Karte 177',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 177.',
    image: '/cards/177.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '178',
    name: 'Karte 178',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 178.',
    image: '/cards/178.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '179',
    name: 'Karte 179',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 179.',
    image: '/cards/179.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '180',
    name: 'Karte 180',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 180.',
    image: '/cards/180.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

,{
    id: '181',
    name: 'Karte 181',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 181.',
    image: '/cards/181.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '182',
    name: 'Karte 182',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 182.',
    image: '/cards/182.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '183',
    name: 'Karte 183',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 183.',
    image: '/cards/183.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '184',
    name: 'Karte 184',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 184.',
    image: '/cards/184.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '185',
    name: 'Karte 185',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 185.',
    image: '/cards/185.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '186',
    name: 'Karte 186',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 186.',
    image: '/cards/186.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '187',
    name: 'Karte 187',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 187.',
    image: '/cards/187.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '188',
    name: 'Karte 188',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 188.',
    image: '/cards/188.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '189',
    name: 'Karte 189',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 189.',
    image: '/cards/189.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '190',
    name: 'Karte 190',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 190.',
    image: '/cards/190.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '191',
    name: 'Karte 191',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 191.',
    image: '/cards/191.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '192',
    name: 'Karte 192',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 192.',
    image: '/cards/192.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '193',
    name: 'Karte 193',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 193.',
    image: '/cards/193.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '194',
    name: 'Karte 194',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 194.',
    image: '/cards/194.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '195',
    name: 'Karte 195',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 195.',
    image: '/cards/195.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '196',
    name: 'Karte 196',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 196.',
    image: '/cards/196.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '197',
    name: 'Karte 197',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 197.',
    image: '/cards/197.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '198',
    name: 'Karte 198',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 198.',
    image: '/cards/198.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '199',
    name: 'Karte 199',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 199.',
    image: '/cards/199.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '200',
    name: 'Karte 200',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 200.',
    image: '/cards/200.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '201',
    name: 'Karte 201',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 201.',
    image: '/cards/201.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '202',
    name: 'Karte 202',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 202.',
    image: '/cards/202.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '203',
    name: 'Karte 203',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 203.',
    image: '/cards/203.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '204',
    name: 'Karte 204',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 204.',
    image: '/cards/204.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '205',
    name: 'Karte 205',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 205.',
    image: '/cards/205.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '206',
    name: 'Karte 206',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 206.',
    image: '/cards/206.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '207',
    name: 'Karte 207',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 207.',
    image: '/cards/207.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '208',
    name: 'Karte 208',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 208.',
    image: '/cards/208.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '209',
    name: 'Karte 209',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 209.',
    image: '/cards/209.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '210',
    name: 'Karte 210',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 210.',
    image: '/cards/210.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '211',
    name: 'Karte 211',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 211.',
    image: '/cards/211.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '212',
    name: 'Karte 212',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 212.',
    image: '/cards/212.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '213',
    name: 'Karte 213',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 213.',
    image: '/cards/213.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '214',
    name: 'Karte 214',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 214.',
    image: '/cards/214.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '215',
    name: 'Karte 215',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 215.',
    image: '/cards/215.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '216',
    name: 'Karte 216',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 216.',
    image: '/cards/216.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '217',
    name: 'Karte 217',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 217.',
    image: '/cards/217.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '218',
    name: 'Karte 218',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 218.',
    image: '/cards/218.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '219',
    name: 'Karte 219',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 219.',
    image: '/cards/219.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '220',
    name: 'Karte 220',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 220.',
    image: '/cards/220.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '221',
    name: 'Karte 221',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 221.',
    image: '/cards/221.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '222',
    name: 'Karte 222',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 222.',
    image: '/cards/222.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '223',
    name: 'Karte 223',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 223.',
    image: '/cards/223.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '224',
    name: 'Karte 224',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 224.',
    image: '/cards/224.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '225',
    name: 'Karte 225',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 225.',
    image: '/cards/225.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '226',
    name: 'Karte 226',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 226.',
    image: '/cards/226.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '227',
    name: 'Karte 227',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 227.',
    image: '/cards/227.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '228',
    name: 'Karte 228',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 228.',
    image: '/cards/228.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '229',
    name: 'Karte 229',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 229.',
    image: '/cards/229.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '230',
    name: 'Karte 230',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 230.',
    image: '/cards/230.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '231',
    name: 'Karte 231',
    cost: 1,
    attack: 2,
    health: 3,
    description: 'Beschreibung für Karte 231.',
    image: '/cards/231.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '232',
    name: 'Karte 232',
    cost: 2,
    attack: 4,
    health: 6,
    description: 'Beschreibung für Karte 232.',
    image: '/cards/232.jpg',
    class: 'Klasse 8',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '233',
    name: 'Karte 233',
    cost: 3,
    attack: 6,
    health: 9,
    description: 'Beschreibung für Karte 233.',
    image: '/cards/233.jpg',
    class: 'Klasse 9',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '234',
    name: 'Karte 234',
    cost: 4,
    attack: 8,
    health: 2,
    description: 'Beschreibung für Karte 234.',
    image: '/cards/234.jpg',
    class: 'Klasse 1',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '235',
    name: 'Karte 235',
    cost: 5,
    attack: 0,
    health: 5,
    description: 'Beschreibung für Karte 235.',
    image: '/cards/235.jpg',
    class: 'Klasse 2',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '236',
    name: 'Karte 236',
    cost: 6,
    attack: 2,
    health: 8,
    description: 'Beschreibung für Karte 236.',
    image: '/cards/236.jpg',
    class: 'Klasse 3',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '237',
    name: 'Karte 237',
    cost: 7,
    attack: 4,
    health: 1,
    description: 'Beschreibung für Karte 237.',
    image: '/cards/237.jpg',
    class: 'Klasse 4',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '238',
    name: 'Karte 238',
    cost: 8,
    attack: 6,
    health: 4,
    description: 'Beschreibung für Karte 238.',
    image: '/cards/238.jpg',
    class: 'Klasse 5',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '239',
    name: 'Karte 239',
    cost: 9,
    attack: 8,
    health: 7,
    description: 'Beschreibung für Karte 239.',
    image: '/cards/239.jpg',
    class: 'Klasse 6',
    rarity: 'common',
    mechanics: ['demo']
  },

  {
    id: '240',
    name: 'Karte 240',
    cost: 0,
    attack: 0,
    health: 0,
    description: 'Beschreibung für Karte 240.',
    image: '/cards/240.jpg',
    class: 'Klasse 7',
    rarity: 'common',
    mechanics: ['demo']
  }

];
];
