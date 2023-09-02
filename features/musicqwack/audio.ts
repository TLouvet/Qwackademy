import { FrequencyObject, MusiqwackKeys } from '../types';

const MINIQWACKER_NOTE_DURATION = 500;
const QWACKERMASTER_NOTE_DURATION = 250;

export const soloFrequencies: FrequencyObject = {
  'C-key': 261.63,
  'D-key': 293.66,
  'E-key': 329.63,
  'F-key': 349.23,
  'G-key': 392.0,
  'A-key': 440.0,
  'B-key': 493.88,
};

export function generateNewKey(sequence: readonly MusiqwackKeys[]) {
  const availableValues = Object.keys(soloFrequencies) as MusiqwackKeys[];
  let newKey: MusiqwackKeys;
  do {
    newKey = availableValues[Math.floor(Math.random() * availableValues.length)];
  } while (newKey === sequence[sequence.length - 1]);

  return newKey;
}

export function playAudioSequence(sequence: readonly MusiqwackKeys[]) {
  if (sequence.length === 0) {
    return;
  }

  const DELAY_STOP = MINIQWACKER_NOTE_DURATION * (sequence.length + 1);

  const audioCtx = new AudioContext();
  const oscillator = createSineOscillator(audioCtx);
  const vca = createGain(audioCtx);

  oscillator.connect(vca);
  oscillator.start(0.5);

  let currentNote = 0;
  oscillator.frequency.value = soloFrequencies[sequence[currentNote]];

  const intervalId = setInterval(() => {
    if (currentNote < sequence.length) {
      oscillator.frequency.value = soloFrequencies[sequence[currentNote]];
      currentNote++;
    }
  }, MINIQWACKER_NOTE_DURATION);

  stopAfterDelay(oscillator, intervalId, audioCtx, DELAY_STOP);

  return oscillator;
}

function createSineOscillator(audioCtx: AudioContext) {
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  return oscillator;
}

export function createGain(audioCtx: AudioContext, value = 0.1) {
  const vca = audioCtx.createGain();
  vca.gain.value = value;
  vca.connect(audioCtx.destination);
  return vca;
}

function stopAfterDelay(oscillator: OscillatorNode, intervalId: NodeJS.Timeout, audioCtx: AudioContext, delay: number) {
  setTimeout(() => {
    clearInterval(intervalId);
    oscillator.stop();
    oscillator.disconnect();
    audioCtx.close();
  }, delay);
}
