window.SPAWNING = [
  { id: 'webmeji-ingeniero', config: 'INGENIERO_CONFIG' }
];

window.INGENIERO_CONFIG = {
  ALLOWANCES: ['pet', 'drag', 'bottom'],

  walkspeed: 70,
  fallspeed: 210,
  jumpspeed: 250,
  gettingupspeed: 2500,

  walk: {
    frames: [
      'ingeniero/shime8.png',
      'ingeniero/shime2.png',
      'ingeniero/shime9m.png',
      'ingeniero/shime2.png'
    ],
    interval: 175,
    loops: 6
  },

  stand: {
    frames: [
      'ingeniero/shime1.png',
      'ingeniero/shime4.png'
    ],
    interval: 700,
    loops: 3
  },

  sit: {
    frames: ['ingeniero/shime28.png'],
    interval: 1000,
    loops: 1,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  spin: {
    frames: [
      'ingeniero/shime1.png',
      'ingeniero/shime2.png',
      'ingeniero/shime3.png',
      'ingeniero/shime2m.png',
      'ingeniero/shime4.png'
    ],
    interval: 150,
    loops: 2
  },

  dance: {
    frames: [
      'ingeniero/shime23.png',
      'ingeniero/shime31.png',
      'ingeniero/shime23.png',
      'ingeniero/shime31.png'
    ],
    interval: 220,
    loops: 3
  },

  install: {
    frames: [
      'ingeniero/shime19.png',
      'ingeniero/shime20.png',
      'ingeniero/shime21.png',
      'ingeniero/shime20.png'
    ],
    interval: 450,
    loops: 3
  },

  rack: {
    frames: [
      'ingeniero/shime26.png',
      'ingeniero/shime27.png'
    ],
    interval: 600,
    loops: 3
  },

  trip: {
    frames: [
      'ingeniero/shime35.png',
      'ingeniero/shime35.png',
      'ingeniero/shime30.png',
      'ingeniero/shime30.png'
    ],
    interval: 300,
    loops: 1
  },

  forcewalk: 4,

  forcethink: {
    frames: [
      'ingeniero/shime24.png',
      'ingeniero/shime32.png'
    ],
    interval: 500,
    loops: 2
  },

  pet: {
    frames: [
      'ingeniero/shime31.png',
      'ingeniero/shime23.png'
    ],
    interval: 250
  },

  drag: {
    frames: [
      'ingeniero/shime35.png',
      'ingeniero/shime17.png',
      'ingeniero/shime35.png',
      'ingeniero/shime18.png'
    ],
    interval: 210
  },

  falling: {
    frames: ['ingeniero/shime35.png'],
    interval: 200,
    loops: 2
  },

  fallen: {
    frames: [
      'ingeniero/shime30.png',
      'ingeniero/shime29.png'
    ],
    interval: 250,
    loops: 1
  },

  ORIGINAL_ACTIONS: [
    'walk',
    'walk',
    'walk',
    'walk',
    'walk',
    'walk',
    'stand',
    'spin',
    'sit',
    'sit',
    'install',
    'rack',
    'dance',
    'trip'
  ],

  JUMP_CHANCE: 0,

  jump: {
    frames: ['ingeniero/shime16.png'],
    interval: 200
  }
};
