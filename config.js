
window.SPAWNING = [
  { id: 'webmeji-0', config: 'SHIMEJI_CONFIG' },
  { id: 'webmeji-1', config: 'SHIMEJI2_CONFIG' }
];

window.SHIMEJI_CONFIG = {
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  DISPLAY: {
    size: 128,
    mobileSize: 96,
    mobileBreakpoint: 768,
    minSize: 64,
    maxSize: 256,
    edgeOverlap: 0
  },

  SPEECH: {
    startDelay: 2000,
    interval: 10000,
    duration: 4500,
    phrases: [
      'No es muy revolucionario de tu parte levantar tu ticket.',
      '¡Tierra y libertad! Pero primero reinicia la computadora, compañero.',
      'Una contraseña revolucionaria no se comparte ni se pega en un post-it.',
      'Un buen soldado respalda sus archivos antes de entrar en batalla.'
    ]
  },

  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 180,
  gettingupspeed: 2500,

  walk: {
    frames: [
      'shimeji/shime1.png',
      'shimeji/shime2.png',
      'shimeji/shime3.png',
      'shimeji/shime2.png'
    ],
    interval: 175,
    loops: 6
  },

  stand: {
    frames: ['shimeji/shime1.png'],
    interval: 200,
    loops: 1
  },

  sit: {
    frames: ['shimeji/shime11.png'],
    interval: 1000,
    loops: 1,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  spin: {
    frames: ['shimeji/shime1.png'],
    interval: 150,
    loops: 3
  },

  dance: {
    frames: [
      'shimeji/shime5.png',
      'shimeji/shime6.png',
      'shimeji/shime1.png'
    ],
    interval: 200,
    loops: 4
  },

  trip: {
    frames: [
      'shimeji/shime19.png',
      'shimeji/shime19.png',
      'shimeji/shime19.png',
      'shimeji/shime17.png',
      'shimeji/shime17.png',
      'shimeji/shime17.png'
    ],
    interval: 250,
    loops: 1
  },

  forcewalk: {
    loops: 6
  },

  forcethink: {
    frames: [
      'shimeji/shime27.png',
      'shimeji/shime28.png'
    ],
    interval: 500,
    loops: 2
  },

  pet: {
    frames: [
      'shimeji/shime15.png',
      'shimeji/shime16.png',
      'shimeji/shime17.png'
    ],
    interval: 150
  },

  drag: {
    frames: [
      'shimeji/shime5.png',
      'shimeji/shime7.png',
      'shimeji/shime5.png',
      'shimeji/shime6.png',
      'shimeji/shime8.png',
      'shimeji/shime6.png'
    ],
    interval: 210
  },

  falling: {
    frames: ['shimeji/shime4.png'],
    interval: 200,
    loops: 2
  },

  fallen: {
    frames: [
      'shimeji/shime19.png',
      'shimeji/shime18.png'
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
      'shimeji/shime13.png',
      'shimeji/shime14.png'
    ],
    interval: 200,
    loops: 2
  },

  hangstillSide: {
    frames: ['shimeji/shime12.png'],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  climbTop: {
    frames: [
      'shimeji/shime24.png',
      'shimeji/shime25.png'
    ],
    interval: 200,
    loops: 6
  },

  hangstillTop: {
    frames: ['shimeji/shime23.png'],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  jump: {
    frames: ['shimeji/shime22.png'],
    interval: 200
  }
};

window.SHIMEJI2_CONFIG = JSON.parse(
  JSON.stringify(window.SHIMEJI_CONFIG).replace(/shimeji\//g, 'shimeji2/')
);

window.SHIMEJI2_CONFIG.SPEECH = {
  startDelay: 7000,
  interval: 10000,
  duration: 4500,
  phrases: [
    '¿Ya apagaste y prendiste el equipo? Esa es la verdadera revolución.',
    '¡Viva la nube! Pero guarda tu trabajo antes de que caiga el servidor.',
    'Ese correo sospechoso es una emboscada: ¡no le des clic!',
    'Quien no actualiza su sistema le entrega la trinchera al malware.'
  ]
};

(function () {
  const f = n => `shimeji2/shime${n}.png`;
  const c = window.SHIMEJI2_CONFIG;
  c.dance.frames         = [5, 3, 1].map(f);
  c.drag.frames          = [5, 7, 5, 10, 8, 10].map(f);
  c.hangstillSide.frames = [13].map(f);
  c.fallen.frames        = [19, 17].map(f);
  c.climbTop.frames      = [23, 25].map(f);
})();
