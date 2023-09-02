import { QwackerMode } from '@/features/types';
import useGameCommon from '../useGameCommon';
import { useState, useEffect } from 'react';
import { generateSequence, getDialogToDisplay } from '@/features/qwackematician';
import { QWACKEMATICIAN_DIALOG } from '@/data/dialogs/qwackematician';

export function useQwackematicianLogic() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const [answer, setAnswer] = useState('');
  const [currentSequence, setCurrentSequence] = useState('');
  const [currentText, setCurrentText] = useState(QWACKEMATICIAN_DIALOG.lvl1To4TextValid);

  const errorText = ` Ah, a misstep in the sequence of numbers, the answer was ${currentSequence} whereas you told ${answer}. Your
  memory stumbled, and the sequence slipped from your grasp. Fear not, for even the finest mathematicians
  fumble now and then. Take heed of this moment and return when you&apos;re ready to reclaim
  your place. Remember, the numbers shall await your triumphant return.`;

  function handlePlay(mode: QwackerMode) {
    setSelectedMode(mode);
    setCurrentSequence(generateSequence(level, mode));
  }

  function handleValidation() {
    if (answer === currentSequence) {
      setLevel(level + 1);
      const dialog = getDialogToDisplay(level);
      setCurrentText(dialog);

      setTimeout(() => {
        const newSequence = generateSequence(level + 1, selectedMode);
        setCurrentSequence(newSequence);
        setAnswer('');
      }, 2000);
    } else {
      setAnswer('');
      setCurrentText(errorText);
      setIsError(true);
    }

    setCanPlay(false);
  }

  useEffect(() => {
    setCurrentText(QWACKEMATICIAN_DIALOG.tempText + currentSequence);
    setTimeout(() => {
      setCurrentText(QWACKEMATICIAN_DIALOG.questionText);
      setCanPlay(true);
    }, 2000 + Math.floor(level / 5) * 500);
  }, [currentSequence, setCanPlay]);

  return {
    answer,
    setAnswer,
    currentSequence,
    handlePlay,
    handleValidation,
    selectedMode,
    handleReplay,
    level,
    canPlay,
    isError,
    currentText,
  };
}
