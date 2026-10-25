/*
 Codigo de mis fantasmas imagenes
 */

window.SPAWNING = [
  { id: 'webmeji-fantasma', config: 'GHOST_CONFIG' },
  { id: 'webmeji-vampiro', config: 'VAMPIRO_CONFIG' }
];

window.GHOST_CONFIG = {
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 180,
  gettingupspeed: 2500,

  walk: {
    frames: [
      'ghost/Shime1.png',
      'ghost/Shime2.png',
      'ghost/Shime3.png',
      'ghost/Shime2.png'
    ],
    interval: 175,
    loops: 6
  },

  stand: {
    frames: ['ghost/Shime1.png'],
    interval: 200,
    loops: 1
  },

  sit: {
    frames: ['ghost/Shime11.png'],
    interval: 1000,
    loops: 1,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  spin: {
    frames: ['ghost/Shime1.png'],
    interval: 150,
    loops: 3
  },

  dance: {
    frames: [
      'ghost/Shime5.png',
      'ghost/Shime6.png',
      'ghost/Shime1.png'
    ],
    interval: 200,
    loops: 4
  },

  trip: {
    frames: [
      'ghost/Shime20.png',
      'ghost/Shime21.png',
      'ghost/Shime21.png',
      'ghost/Shime20.png',
      'ghost/Shime21.png',
      'ghost/Shime21.png'
    ],
    interval: 250,
    loops: 1
  },

  forcewalk: {
    loops: 6
  },

  forcethink: {
    frames: [
      'ghost/Shime27.png',
      'ghost/Shime28.png'
    ],
    interval: 500,
    loops: 2
  },

  pet: {
    frames: [
      'ghost/Shime15.png',
      'ghost/Shime16.png',
      'ghost/Shime17.png'
    ],
    interval: 150
  },

  drag: {
    frames: [
      'ghost/Shime5.png',
      'ghost/Shime7.png',
      'ghost/Shime5.png',
      'ghost/Shime6.png',
      'ghost/Shime8.png',
      'ghost/Shime6.png'
    ],
    interval: 210
  },

  falling: {
    frames: ['ghost/Shime4.png'],
    interval: 200,
    loops: 2
  },

  fallen: {
    frames: [
      'ghost/Shime19.png',
      'ghost/Shime18.png'
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
    'walk',
    'walk',
    'spin',
    'sit',
    'sit',
    'dance',
    'dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang',
    'hang',
    'climb',
    'climb',
    'climb',
    'fall'
  ],

  JUMP_CHANCE: 0.08,

  climbSide: {
    frames: [
      'ghost/Shime13.png',
      'ghost/Shime14.png'
    ],
    interval: 200,
    loops: 2
  },

  hangstillSide: {
    frames: ['ghost/Shime12.png'],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  climbTop: {
    frames: [
      'ghost/Shime24.png',
      'ghost/Shime25.png'
    ],
    interval: 200,
    loops: 6
  },

  hangstillTop: {
    frames: ['ghost/Shime23.png'],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  jump: {
    frames: ['ghost/Shime22.png'],
    interval: 200
  }
};
// ============================================
// VAMPIRO DE HALLOWEEN
// Personaje independiente del fantasma
// ============================================

window.VAMPIRO_CONFIG = {
  ALLOWANCES: [
    'pet',
    'drag',
    'bottom',
    'top',
    'left',
    'right'
  ],

  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 180,
  gettingupspeed: 2500,

  // Caminar / correr
  walk: {
    frames: [
      'vampiro/run1.png',
      'vampiro/run2.png',
      'vampiro/run3.png',
      'vampiro/run4.png'
    ],
    interval: 175,
    loops: 6
  },

  // Reposo
  stand: {
    frames: [
      'vampiro/idle1.png',
      'vampiro/idle2.png',
      'vampiro/idle3.png',
      'vampiro/idle4.png'
    ],
    interval: 250,
    loops: 4
  },

  sit: {
    frames: [
      'vampiro/idle1.png',
      'vampiro/idle2.png'
    ],
    interval: 500,
    loops: 4,
    randomizeDuration: true,
    min: 3000,
    max: 8000
  },

  spin: {
    frames: [
      'vampiro/idle1.png',
      'vampiro/idle2.png',
      'vampiro/idle3.png',
      'vampiro/idle4.png'
    ],
    interval: 150,
    loops: 2
  },

  dance: {
    frames: [
      'vampiro/run1.png',
      'vampiro/run2.png',
      'vampiro/run3.png',
      'vampiro/run4.png'
    ],
    interval: 150,
    loops: 3
  },

  trip: {
    frames: [
      'vampiro/fall.png'
    ],
    interval: 250,
    loops: 1
  },

  forcewalk: {
    loops: 6
  },

  forcethink: {
    frames: [
      'vampiro/idle2.png',
      'vampiro/idle3.png'
    ],
    interval: 500,
    loops: 2
  },

  pet: {
    frames: [
      'vampiro/idle1.png',
      'vampiro/idle2.png',
      'vampiro/idle3.png'
    ],
    interval: 200
  },

  drag: {
    frames: [
      'vampiro/run1.png',
      'vampiro/run2.png',
      'vampiro/run3.png',
      'vampiro/run4.png'
    ],
    interval: 180
  },

  falling: {
    frames: [
      'vampiro/fall.png'
    ],
    interval: 200,
    loops: 2
  },

  fallen: {
    frames: [
      'vampiro/fall.png'
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
    'sit',
    'sit',
    'dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang',
    'hang',
    'climb',
    'climb',
    'climb',
    'fall'
  ],

  JUMP_CHANCE: 0.08,

  climbSide: {
    frames: [
      'vampiro/run1.png',
      'vampiro/run2.png'
    ],
    interval: 200,
    loops: 2
  },

  hangstillSide: {
    frames: [
      'vampiro/idle1.png'
    ],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 8000
  },

  climbTop: {
    frames: [
      'vampiro/run1.png',
      'vampiro/run2.png'
    ],
    interval: 200,
    loops: 4
  },

  hangstillTop: {
    frames: [
      'vampiro/idle1.png'
    ],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 8000
  },

  jump: {
    frames: [
      'vampiro/jump.png'
    ],
    interval: 200
  }
};