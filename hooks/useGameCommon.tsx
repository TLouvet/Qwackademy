import { QwackerMode } from '@/features/types';
import { useState } from 'react';
import usePreventCopy from './usePreventCopy';

export default function useGameCommon() {
  usePreventCopy();

  const [selectedMode, setSelectedMode] = useState<QwackerMode>('none');
  const [level, setLevel] = useState(1);

  const [canPlay, setCanPlay] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleReplay() {
    setSelectedMode('none');
    setIsError(false);
    setLevel(1);
    setCanPlay(false);
  }

  return {
    selectedMode,
    setSelectedMode,
    level,
    setLevel,
    canPlay,
    setCanPlay,
    isError,
    setIsError,
    handleReplay,
  };
}
