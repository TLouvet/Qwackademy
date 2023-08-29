import { QWACKEMATICIAN_DIALOG } from '@/data/dialogs/qwackematician';
import { QwackerMode } from './types';

export function generateSequence(level: number, selectedMode: QwackerMode) {
  const sequencecharacters = selectedMode === 'miniqwacker' ? '0123456789' : '0123456789abcdefghijklmnopqrstuvwxyz';

  let sequence = '';

  for (let i = 0; i < level; i++) {
    sequence += sequencecharacters[Math.floor(Math.random() * sequencecharacters.length)];
  }

  return sequence;
}

// ouf, this is a mess
export function getDialogToDisplay(level: number) {
  if (level < 5) {
    return QWACKEMATICIAN_DIALOG.lvl1To4TextValid;
  } else if (level === 5) {
    return QWACKEMATICIAN_DIALOG.lvl5TextValid;
  } else if (level < 10) {
    return QWACKEMATICIAN_DIALOG.lvl6To9TextValid;
  } else if (level === 10) {
    return QWACKEMATICIAN_DIALOG.lvl10TextValid;
  } else if (level < 15) {
    return QWACKEMATICIAN_DIALOG.lvl11To14TextValid;
  } else if (level === 15) {
    return QWACKEMATICIAN_DIALOG.lvl15TextValid;
  } else if (level < 20) {
    return QWACKEMATICIAN_DIALOG.lvl16To19TextValid;
  } else if (level === 20) {
    return QWACKEMATICIAN_DIALOG.lvl20TextValid;
  } else if (level < 25) {
    return QWACKEMATICIAN_DIALOG.lvl21To24TextValid;
  } else if (level === 25) {
    return QWACKEMATICIAN_DIALOG.lvl25TextValid;
  } else if (level < 30) {
    return QWACKEMATICIAN_DIALOG.lvl26To29TextValid;
  } else if (level === 30) {
    return QWACKEMATICIAN_DIALOG.lvl30TextValid;
  } else if (level < 35) {
    return QWACKEMATICIAN_DIALOG.lvl31To34TextValid;
  }
  return QWACKEMATICIAN_DIALOG.lvl35TextValid;
}
