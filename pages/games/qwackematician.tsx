import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMATICIAN_RULES } from '@/data/rules/qwackematician';
import { Button, Col, Form, FormGroup } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { QwackerMode } from '@/features/types';
import { generateSequence, getDialogToDisplay } from '@/features/qwackematician';
import QwackerModeSelector from '@/components/QwackerModeSelector/QwackerModeSelector';
import Image from 'next/image';
import usePreventCopy from '@/hooks/usePreventCopy';
import useGameCommon from '@/hooks/useGameCommon';
import { QWACKEMATICIAN_DIALOG } from '@/data/dialogs/qwackematician';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';

export default function QwackematicianPage() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();
  const [answer, setAnswer] = useState('');
  const [currentSequence, setCurrentSequence] = useState('');
  const refSeqToHide = useRef<HTMLSpanElement>(null);

  const errorText = ` Ah, a misstep in the sequence of numbers, the answer was ${currentSequence} whereas you told ${answer}. Your
  memory stumbled, and the sequence slipped from your grasp. Fear not, for even the finest mathematicians
  fumble now and then. Take heed of this moment and return when you&apos;re ready to reclaim
  your place. Remember, the numbers shall await your triumphant return.`;

  const [currentText, setCurrentText] = useState(QWACKEMATICIAN_DIALOG.lvl1To4TextValid);
  usePreventCopy();

  const handlePlay = (mode: QwackerMode) => {
    setSelectedMode(mode);
    setCurrentSequence(generateSequence(level, mode));
  };

  function handleValidation() {
    if (!refSeqToHide.current) return;

    if (answer === currentSequence) {
      setLevel(level + 1);
      const dialog = getDialogToDisplay(level);
      setCurrentText(dialog);

      setTimeout(() => {
        const newSequence = generateSequence(level + 1, selectedMode);
        setCurrentSequence(newSequence);
        setAnswer('');
        if (!refSeqToHide.current) return;
        refSeqToHide.current.textContent = ': ' + newSequence;
      }, 2000);
    } else {
      setAnswer('');
      setCurrentText(errorText);
      setIsError(true);
    }

    setCanPlay(false);
  }

  useEffect(() => {
    setCurrentText(QWACKEMATICIAN_DIALOG.tempText);
    setTimeout(() => {
      if (refSeqToHide.current) {
        refSeqToHide.current.textContent = '';
      }
      setCurrentText(QWACKEMATICIAN_DIALOG.questionText);
      setCanPlay(true);
    }, 2000 + Math.floor(level / 5) * 500);
  }, [currentSequence, setCanPlay]);

  return (
    <PageLayout withBackLink>
      <h1>The Qwackematician Sequence</h1>

      {selectedMode === 'none' && (
        <div>
          <WelcomingSection title='Rules' rules={QWACKEMATICIAN_RULES} character={QWACKER_CARDS.mathematician} />
          <QwackerModeSelector handlePlay={handlePlay} />
        </div>
      )}

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <div style={{ minHeight: '100vh' }}>
            <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />

            <div className='d-flex align-items-center mb-5' style={{ background: '#2d30376e' }}>
              <Image width={150} height={150} src={QWACKER_CARDS.mathematician.src} alt='' />
              <p className='p-3'>
                {currentText} <span ref={refSeqToHide}>: {currentSequence}</span>
              </p>
            </div>

            {canPlay && (
              <form
                className='my-5'
                onSubmit={(e) => {
                  e.preventDefault();
                  handleValidation();
                }}
              >
                <Col xs={12} md={4} className='d-flex align-items-end'>
                  <FormGroup className='me-4'>
                    <Form.Label htmlFor='answer'>Your answer:</Form.Label>
                    <Form.Control
                      type='text'
                      id='answer'
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      autoFocus
                      autoComplete='off'
                    />
                  </FormGroup>
                  <Button type='button' onClick={handleValidation}>
                    Validate
                  </Button>
                </Col>
              </form>
            )}
          </div>
        </section>
      )}
    </PageLayout>
  );
}

// Un game screen
// Un replay button
// Des animations entre chaque lvl
// Des dialogues tous les x lvl
// un timer de 15s
// peut-être augmenter le temps de mémorisation en fonction du lvl
