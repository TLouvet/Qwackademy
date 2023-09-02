import PageLayout from '@/components/Layout/PageLayout';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMATICIAN_RULES } from '@/data/rules/qwackematician';
import { Button, Col, Form, FormGroup } from 'react-bootstrap';
import Image from 'next/image';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';
import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';
import { useQwackematicianLogic } from '@/hooks/qwackematician/useQwackematicianLogic';
import { DialogBox } from '@/components/DialogBox/DialogBox';

export default function QwackematicianPage() {
  const {
    handlePlay,
    handleReplay,
    handleValidation,
    setAnswer,
    selectedMode,
    level,
    canPlay,
    isError,
    answer,
    currentText,
  } = useQwackematicianLogic();

  return (
    <PageLayout withBackLink title='The Qwackematician Sequence'>
      <GamePageIntro
        rules={QWACKEMATICIAN_RULES}
        character={QWACKER_CARDS.mathematician}
        handlePlay={handlePlay}
        selectedMode={selectedMode}
      />

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <div style={{ minHeight: '100vh' }}>
            <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />
            <DialogBox imageSrc={QWACKER_CARDS.mathematician.src} text={currentText} />

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
// Des animations entre chaque lvl
// un timer de 15s
