import { QwackerMode } from './types';

export function generateSequence(level: number, selectedMode: QwackerMode) {
  const sequencecharacters = selectedMode === 'miniqwacker' ? '0123456789' : '0123456789abcdefghijklmnopqrstuvwxyz';

  let sequence = '';

  for (let i = 0; i < level; i++) {
    sequence += sequencecharacters[Math.floor(Math.random() * sequencecharacters.length)];
  }

  return sequence;
}
