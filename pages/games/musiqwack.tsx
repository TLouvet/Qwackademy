import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { MUSICQWACK_RULES } from '@/data/rules/musiqwack';
import PageLayout from '@/components/Layout/PageLayout';
import { useEffect, useCallback } from 'react';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';
import { MusiqwackKeys } from '@/features/types';
import { Keyboard } from '@/components/Keyboard/Keyboard';
import { createGain, playAudioSequence, soloFrequencies } from '@/features/musicqwack/audio';
import { handleInput } from '@/features/musicqwack/keyboardInput';
import { showKeyAnimation } from '@/features/musicqwack/html';
import { useMusicQwackLogic } from '@/hooks/musiqwack/useMusicqwcakLogic';
import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';
import { DialogBox } from '@/components/DialogBox/DialogBox';

export default function MusiqwackPage() {
  const {
    sequenceToFind,
    setSequence,
    playerSequence,
    setPlayerSequence,
    handleNewLevel,
    handlePlay,
    selectedMode,
    canPlay,
    setCanPlay,
    setIsError,
    handleReplay,
    level,
    isError,
  } = useMusicQwackLogic();

  const handleClick = useCallback(
    (id?: string) => {
      const audioctx = new AudioContext();
      const oscillator = audioctx.createOscillator();
      const vca = createGain(audioctx);

      oscillator.type = 'sine';
      oscillator.frequency.value = soloFrequencies[id as MusiqwackKeys];
      oscillator.connect(vca);
      oscillator.start(0);

      showKeyAnimation(id as MusiqwackKeys);

      setTimeout(() => {
        oscillator.stop();
        oscillator.disconnect();
        vca.disconnect();
        audioctx.close();

        if (!canPlay) {
          return;
        }
        setPlayerSequence((prev) => [...prev, id as MusiqwackKeys]);
      }, 500);
    },
    [canPlay]
  );

  useEffect(() => {
    function addListener(e: KeyboardEvent) {
      handleInput(e, handleClick);
    }
    window.addEventListener('keydown', addListener);
    return () => {
      window.removeEventListener('keydown', addListener);
    };
  }, [handleClick]);

  function handleEndGame() {
    setSequence([]);
    setPlayerSequence([]);
    setCanPlay(false);
  }

  useEffect(() => {
    playAudioSequence(sequenceToFind);
    let i = 0;
    const intervalId = setInterval(() => {
      if (sequenceToFind.length === 0 || i >= sequenceToFind.length) return;
      showKeyAnimation(sequenceToFind[i]);
      i++;
    }, 500);

    // Allow player to play after the sequence has been played
    setTimeout(() => {
      clearInterval(intervalId);
      setCanPlay(true);
    }, sequenceToFind.length * 500);
  }, [sequenceToFind, setCanPlay]);

  useEffect(() => {
    if (playerSequence.length === 0) return;
    const lastIndex = playerSequence.length - 1;
    const isSame = playerSequence[lastIndex] === sequenceToFind[lastIndex];

    if (!isSame) {
      setIsError(true);
      setCanPlay(false);
      return;
    }

    if (playerSequence.length === sequenceToFind.length) {
      handleNewLevel();
    }
  }, [playerSequence]);

  return (
    <PageLayout withBackLink title='The Musiqwack Symfony'>
      <GamePageIntro
        rules={MUSICQWACK_RULES}
        character={QWACKER_CARDS.musicqwack}
        handlePlay={handlePlay}
        selectedMode={selectedMode}
      />

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />
          <DialogBox
            imageSrc={QWACKER_CARDS.musicqwack.src}
            text='Repeat the sequence by pressing the keys on your keyboard.'
          />
        </section>
      )}
      <Keyboard onClick={handleClick} />
    </PageLayout>
  );
}
