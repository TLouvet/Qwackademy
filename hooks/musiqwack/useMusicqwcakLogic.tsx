import { MusiqwackKeys, QwackerMode } from '@/features/types';
import { useState } from 'react';
import useGameCommon from '../useGameCommon';
import { generateNewKey } from '@/features/musicqwack/audio';

export function useMusicQwackLogic() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const [sequenceToFind, setSequence] = useState<MusiqwackKeys[]>([]);
  const [playerSequence, setPlayerSequence] = useState<MusiqwackKeys[]>([]);

  function handleNewLevel() {
    const newKey = generateNewKey(sequenceToFind);

    setPlayerSequence([]);
    setLevel(level + 1);
    setSequence((prev) => [...prev, newKey]);
    setCanPlay(false);
  }

  function handlePlay(mode: QwackerMode) {
    setSelectedMode(mode);
    setLevel(1);
    setPlayerSequence([]);
    setSequence([generateNewKey([])]);
  }

  return {
    sequenceToFind,
    setSequence,
    playerSequence,
    setPlayerSequence,
    handleNewLevel,
    handlePlay,
    handleReplay,
    canPlay,
    isError,
    selectedMode,
    setCanPlay,
    level,
    setIsError,
  };
}
