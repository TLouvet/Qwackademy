import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { MUSICQWACK_RULES } from '@/data/rules/musiqwack';
import { Button } from 'react-bootstrap';
import PageLayout from '@/components/Layout/PageLayout';
import { useEffect } from 'react';

const frequencies = {
  None: 0,
  E: 329.63,
  F: 349.23,
  Ab: 415.3,
  A: 440.0,
};

// go for A harmonic minor scale with 440Hz as base
const soloFrequencies = {
  None: 0,
  Ab: 415.3,
  A: 440.0,
  B: 493.88,
  C: 523.25,
  D: 587.33,
  E: 659.25,
  F: 698.46,
  Ab2: 830.61,
  A2: 880.0,
  B2: 987.77,
  C2: 1046.5,
  D2: 1174.7,
  E2: 1318.5,
  F2: 1396.9,
  Ab3: 1661.2,
};

const bassFreq = {
  None: 0,
  A: 55,
  C: 65.41,
  D: 73.42,
  E: 82.41,
  F: 87.31,
  Ab: 103.83,
};

export default function MusiqwackPage() {
  // create web audio api context

  useEffect(() => {
    const audioCtx = new AudioContext();
    const vals = Object.values(frequencies);

    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = vals[0]; // value in hertz
    oscillator.start(0);

    const vca = audioCtx.createGain();
    vca.gain.value = 0.1;

    oscillator.connect(vca);
    vca.connect(audioCtx.destination);

    const soloVals = Object.values(soloFrequencies);
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = vals[0] * 2; // value in hertz
    osc2.start(0);

    const vca2 = audioCtx.createGain();
    vca2.gain.value = 0.1;

    osc2.connect(vca2);
    vca2.connect(audioCtx.destination);

    const bassVals = Object.values(bassFreq);
    const bass = audioCtx.createOscillator();
    bass.type = 'triangle';
    bass.frequency.value = vals[0] / 2; // value in hertz
    bass.start(0);

    const vca3 = audioCtx.createGain();
    vca3.gain.value = 0.1;

    bass.connect(vca3);
    vca3.connect(audioCtx.destination);

    // // play each note and stop it
    // vals.forEach((val, i) => {
    //   setTimeout(() => {
    //     oscillator.frequency.value = val;
    //     oscillator.connect(audioCtx.destination);
    //     if (i === vals.length - 1) {
    //       setTimeout(() => {
    //         oscillator.stop();
    //       }, 500);
    //     }
    //   }, 500 * (i + 1));
    // });

    setInterval(() => {
      bass.frequency.value = bassVals[Math.floor(Math.random() * bassVals.length)];
    }, 500);

    setInterval(() => {
      oscillator.frequency.value = vals[Math.floor(Math.random() * vals.length)];
    }, 250 * (Math.floor(Math.random() * vals.length) + 1));

    setInterval(() => {
      osc2.frequency.value = soloVals[Math.floor(Math.random() * soloVals.length)];
    }, 125);

    return () => {
      bass.stop();
      oscillator.stop();
      osc2.stop();
    };
  }, []);

  return (
    <PageLayout withBackLink>
      <h1>The Musiqwack Symfony</h1>

      <WelcomingSection title='Rules' rules={MUSICQWACK_RULES} character={QWACKER_CARDS.musicqwack} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
