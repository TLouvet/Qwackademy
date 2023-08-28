import { QwackerMode } from '@/features/types';
import { useState } from 'react';

export default function useGameCommon() {
  const [selectedMode, setSelectedMode] = useState<QwackerMode>('none');
  const [level, setLevel] = useState(1);

  const [canPlay, setCanPlay] = useState(false);
  const [isError, setIsError] = useState(false);

  return {
    selectedMode,
    setSelectedMode,
    level,
    setLevel,
    canPlay,
    setCanPlay,
    isError,
    setIsError,
  };
}
