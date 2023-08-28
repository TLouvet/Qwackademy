import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMATICIAN_RULES } from '@/data/rules/qwackematician';
import { Button, Col, Form, FormGroup } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { QwackerMode } from '@/features/types';
import { generateSequence } from '@/features/qwackematician';
import QwackerModeSelector from '@/components/QwackerModeSelector/QwackerModeSelector';
import Image from 'next/image';
import usePreventCopy from '@/hooks/usePreventCopy';
import useGameCommon from '@/hooks/useGameCommon';

export default function QwackematicianPage() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError } = useGameCommon();
  const [answer, setAnswer] = useState('');
  const [currentSequence, setCurrentSequence] = useState('');
  const refSeqToHide = useRef<HTMLSpanElement>(null);

  const tempText = "Let's see how you do with this sequence ";
  const questionText = 'What was the sequence?';
  const lvl1To4TextValid = 'Excellent, well played!';
  const lvl5TextValid = 'Ah, a memory virtuoso in the making!';
  const lvl6To9TextValid = 'Very nice, keep it up!';
  const lvl10TextValid = 'Yes, yes, let the numbers flow through you!';
  const lvl11To14TextValid = 'You are a memory master!';
  const lvl15TextValid = "Astonishing! Amidst the crescendo of complexity, your memory's notes ring clear and true";
  const lvl16To19TextValid = 'You are a memory maestro!';
  const lvl20TextValid =
    'Transcendent! In the realm where numbers weave intricate patterns, your memory stands as a beacon of brilliance';
  const lvl21To24TextValid = 'You are a memory prodigy!';
  const lvl25TextValid =
    "Phenomenal! You've breached the boundaries of memory's realm, navigating complexities that few dare to tread";
  const lvl26To29TextValid = 'You are a true memory savant!';
  const lvl30TextValid = "Incredible, you have reached the same level as the Qwackematician's memory!";
  const lvl31To34TextValid = 'You are a memory genius!';
  const lvl35TextValid =
    "Unbelievable! At this point, even the stars themselves might be envious of your memory's radiance.";
  const errorText = ` Ah, a misstep in the sequence of numbers, the answer was ${currentSequence} whereas you told ${answer}. Your
  memory stumbled, and the sequence slipped from your grasp. Fear not, for even the finest mathematicians
  fumble now and then. Take heed of this moment and return when you&apos;re ready to reclaim
  your place. Remember, the numbers shall await your triumphant return.`;

  const [currentText, setCurrentText] = useState(lvl1To4TextValid);
  usePreventCopy();

  const handlePlay = (mode: QwackerMode) => {
    setSelectedMode(mode);
    setCurrentSequence(generateSequence(level, mode));
  };

  function handleReplay() {
    setSelectedMode('none');
    setIsError(false);
    setLevel(1);
    setCanPlay(false);
  }

  function handleValidation() {
    if (!refSeqToHide.current) return;

    if (answer === currentSequence) {
      setLevel(level + 1);
      if (level < 5) {
        setCurrentText(lvl1To4TextValid);
      } else if (level === 5) {
        setCurrentText(lvl5TextValid);
      } else if (level < 10) {
        setCurrentText(lvl6To9TextValid);
      } else if (level === 10) {
        setCurrentText(lvl10TextValid);
      } else if (level < 15) {
        setCurrentText(lvl11To14TextValid);
      } else if (level === 15) {
        setCurrentText(lvl15TextValid);
      } else if (level < 20) {
        setCurrentText(lvl16To19TextValid);
      } else if (level === 20) {
        setCurrentText(lvl20TextValid);
      } else if (level < 25) {
        setCurrentText(lvl21To24TextValid);
      } else if (level === 25) {
        setCurrentText(lvl25TextValid);
      } else if (level < 30) {
        setCurrentText(lvl26To29TextValid);
      } else if (level === 30) {
        setCurrentText(lvl30TextValid);
      } else if (level < 35) {
        setCurrentText(lvl31To34TextValid);
      } else if (level === 35) {
        setCurrentText(lvl35TextValid);
      }

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
    setCurrentText(tempText);

    setTimeout(() => {
      if (refSeqToHide.current) {
        refSeqToHide.current.textContent = '';
      }
      setCurrentText(questionText);
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

      <section id='game' className='mt-5'>
        {selectedMode !== 'none' && (
          <div style={{ minHeight: '100vh' }}>
            <h2>
              Level {level} - {selectedMode}{' '}
              {isError && (
                <Button onClick={handleReplay} className='ms-3'>
                  Try again
                </Button>
              )}
            </h2>

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
        )}
      </section>
    </PageLayout>
  );
}

// Un game screen
// Un replay button
// Des animations entre chaque lvl
// Des dialogues tous les x lvl
// un timer de 15s
// peut-être augmenter le temps de mémorisation en fonction du lvl
