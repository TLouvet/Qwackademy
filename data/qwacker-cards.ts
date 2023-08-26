type QwackerCard = {
  name: string;
  src: string;
  description?: string;
};

const qwackerFolder = '/qwackers';

export const QWACKER_CARDS = {
  omega: {
    name: 'Omega Qwack',
    src: `${qwackerFolder}/omegaqwack.png`,
  },
  alchemist: {
    name: 'Qwackemist',
    src: `${qwackerFolder}/qwackemist.png`,
    gameDescription: 'Brew potions with me, remember the last ingredient I added',
    href: '/games/qwackemist',
  },
  arcanist: {
    name: 'Qwackanist',
    src: `${qwackerFolder}/qwackanist.png`,
    gameDescription:
      'I have this huge list of spells. Memorize them and tell me if it is the first time I tell you this spell or not',
    href: '/games/qwarcanist',
  },
  architecht: {
    name: 'Qwackitect',
    src: `${qwackerFolder}/qwackitect.png`,
    gameDescription: 'I will show you a maze, try to solve it as fast as possible',
    href: '/games/qwarchitect',
  },
  archelologist: {
    name: 'Qwackeologist',
    src: `${qwackerFolder}/qwackeologist.png`,
    gameDescription: "I have found some strange patterns. Let's see if you can remember them all",
    href: '/games/qwackeologist',
  },
  mathematician: {
    name: 'Qwackematician',
    src: `${qwackerFolder}/qwackematician.png`,
    gameDescription: 'I love sequences, I hope you can remember even the most complex ones',
    href: '/games/qwackematician',
  },
  musicqwack: {
    name: 'Musiqwack',
    src: `${qwackerFolder}/musiqwack.png`,
    gameDescription: 'I will play a song, memorize it and play it back',
    href: '/games/musiqwack',
  },
  psychoqwack: {
    name: 'Psychoqwack',
    src: `${qwackerFolder}/psychoqwack.png`,
    gameDescription: 'I will show you the monsters I have in my head, try to find the matching pairs',
    href: '/games/psychoqwack',
  },
};
