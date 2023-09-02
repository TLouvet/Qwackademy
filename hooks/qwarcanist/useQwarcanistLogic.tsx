import { isValidAnswer, selectRandomSpell } from '@/features/qwarcanist/qwarckanist';
import useGameCommon from '../useGameCommon';
import { QwackerMode } from '@/features/types';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { MINIQWACKER_SPELLS, QWACKERMASTER_SPELLS } from '@/features/qwarcanist/constants';
import { QWACKANIST_DIALOG } from '@/data/dialogs/qwackanist';

export function useQwarckanistLogic() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const [spellSequence, setSpellSequence] = useState<Map<string, number>>(new Map<string, number>());
  const [currentSpell, setCurrentSpell] = useState('');
  const [currentDialog, setCurrentDialog] = useState('');

  const spells = useMemo(
    () => (selectedMode === 'miniqwacker' ? MINIQWACKER_SPELLS : QWACKERMASTER_SPELLS),
    [selectedMode]
  );

  const getNextSpell = useCallback(() => {
    const nextSpell = selectRandomSpell(spells);
    setCurrentSpell(nextSpell);
  }, [spells]);

  function handlePlay(mode: QwackerMode) {
    setSelectedMode(mode);
    setCanPlay(true);
    setSpellSequence(new Map<string, number>());
    setCurrentSpell(selectRandomSpell(spells));
  }

  function handleGoodAnswer() {
    setLevel(level + 1);
    if (!spellSequence.has(currentSpell)) {
      setSpellSequence((prev) => new Map<string, number>(prev.set(currentSpell, 1)));
    } else {
      getNextSpell();
    }
  }

  function handleValidate(answer: boolean) {
    if (isValidAnswer(answer, spellSequence, currentSpell)) {
      handleGoodAnswer();
      return;
    }

    setIsError(true);
    setCanPlay(false);
    setCurrentDialog(QWACKANIST_DIALOG.error);
  }

  useEffect(() => {
    if (spellSequence.size === spells.length) {
      setCurrentDialog(QWACKANIST_DIALOG.end);
      setTimeout(() => {
        setSpellSequence(new Map<string, number>());
      }, 5000);
    } else {
      getNextSpell();
    }
  }, [spellSequence, spells.length, getNextSpell]);

  useEffect(() => {
    setCurrentDialog(`Tell me, is "${currentSpell}" a spell I ever told ?`);
  }, [currentSpell]);

  return {
    handlePlay,
    handleValidate,
    spellSequence,
    currentSpell,
    spells,
    level,
    selectedMode,
    handleReplay,
    canPlay,
    isError,
    currentDialog,
  };
}
