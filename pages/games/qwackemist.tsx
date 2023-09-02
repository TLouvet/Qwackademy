import PageLayout from '@/components/Layout/PageLayout';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMIST_RULES } from '@/data/rules/qwackemist';
import useGameCommon from '@/hooks/useGameCommon';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';
import { DialogBox } from '@/components/DialogBox/DialogBox';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';

export default function QwackemistPage() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const [currentText, setCurrentText] = useState('');
  const handlePlay = () => {};

  const handleValidate = () => {};

  return (
    <PageLayout withBackLink title='The Qwackemist Potion Course'>
      <GamePageIntro
        rules={QWACKEMIST_RULES}
        character={QWACKER_CARDS.alchemist}
        handlePlay={handlePlay}
        selectedMode={selectedMode}
      />

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <div style={{ minHeight: '100vh' }}>
            <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />
            <DialogBox imageSrc={QWACKER_CARDS.alchemist.src} text={currentText} />

            {canPlay && (
              <div>
                <Button onClick={handleValidate}>Yes</Button>
                <Button onClick={handleValidate} className='ms-3'>
                  No
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
