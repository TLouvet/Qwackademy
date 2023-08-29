import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKANIST_RULES } from '@/data/rules/qwackanist';
import useGameCommon from '@/hooks/useGameCommon';
import { Button } from 'react-bootstrap';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { QwackerMode } from '@/features/types';
import QwackerModeSelector from '@/components/QwackerModeSelector/QwackerModeSelector';
import Image from 'next/image';
import { MINIQWACKER_SPELLS, QWACKERMASTER_SPELLS, isValidAnswer } from '@/features/qwarckanist';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';
import { QWACKANIST_DIALOG } from '@/data/dialogs/qwackanist';
import usePreventCopy from '@/hooks/usePreventCopy';

export default function QwarcanistPage() {
  usePreventCopy();
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const spells = useMemo(
    () => (selectedMode === 'miniqwacker' ? MINIQWACKER_SPELLS : QWACKERMASTER_SPELLS),
    [selectedMode]
  );

  const [spellSequence, setSpellSequence] = useState<Map<string, number>>(new Map<string, number>());

  const [currentSpell, setCurrentSpell] = useState('');
  const selectWord = useCallback(() => spells[Math.floor(Math.random() * spells.length)], [spells]);
  const getNextSpell = useCallback(() => {
    const nextSpell = selectWord();
    setCurrentSpell(nextSpell);
  }, [selectWord]);

  const dialogRef = useRef<HTMLParagraphElement>(null);

  const currentTextIntro = "Welcome adventurer, I'm the Qwackanist, and I'm here to test your knowledge of spells.";

  const handlePlay = (mode: QwackerMode) => {
    setSelectedMode(mode);
    setCanPlay(true);
    setSpellSequence(new Map<string, number>());
    setCurrentSpell(selectWord());
  };

  const handleValidate = (answer: boolean) => {
    if (isValidAnswer(answer, spellSequence, currentSpell)) {
      handleGoodAnswer();
      return;
    }

    setIsError(true);
    setCanPlay(false);
    if (!dialogRef.current) return;
    dialogRef.current.textContent = QWACKANIST_DIALOG.error;
  };

  function handleGoodAnswer() {
    setLevel(level + 1);
    if (!spellSequence.has(currentSpell)) {
      setSpellSequence((prev) => new Map<string, number>(prev.set(currentSpell, 1)));
    } else {
      getNextSpell();
    }
  }

  useEffect(() => {
    if (!dialogRef.current) return;
    if (spellSequence.size === spells.length) {
      dialogRef.current.textContent = QWACKANIST_DIALOG.end;
      setTimeout(() => {
        setSpellSequence(new Map<string, number>());
      }, 5000);
    } else {
      getNextSpell();
    }
  }, [spellSequence, spells.length, selectWord, getNextSpell]);

  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current.textContent = `Tell me, is "${currentSpell}" a spell I ever told ?`;
  }, [currentSpell]);

  return (
    <PageLayout withBackLink>
      <h1>The Qwackansist Spell Stack</h1>

      {selectedMode === 'none' && (
        <div>
          <WelcomingSection title='Rules' rules={QWACKANIST_RULES} character={QWACKER_CARDS.arcanist} />
          <QwackerModeSelector handlePlay={handlePlay} />
        </div>
      )}

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <div style={{ minHeight: '100vh' }}>
            <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />

            <div className='d-flex align-items-center mb-5' style={{ background: '#2d30376e' }}>
              <Image width={150} height={150} src={QWACKER_CARDS.arcanist.src} alt='' />
              <p className='p-3' ref={dialogRef}>
                {currentTextIntro}
              </p>
            </div>

            {canPlay && (
              <div>
                <Button onClick={() => handleValidate(true)}>Already Told</Button>
                <Button onClick={() => handleValidate(false)} className='ms-3'>
                  First Time
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
