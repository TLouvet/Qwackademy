import PageLayout from '@/components/Layout/PageLayout';
import QwackerModeSelector from '@/components/QwackerModeSelector/QwackerModeSelector';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMIST_RULES } from '@/data/rules/qwackemist';
import { QwackerMode } from '@/features/types';
import useGameCommon from '@/hooks/useGameCommon';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

export default function QwackemistPage() {
  const { selectedMode, setSelectedMode, level, setLevel, canPlay, setCanPlay, isError, setIsError, handleReplay } =
    useGameCommon();

  const [currentText, setCurrentText] = useState('');
  const handlePlay = () => {};

  const handleValidate = () => {};

  return (
    <PageLayout withBackLink>
      <h1>The Qwackemist Potion Course</h1>

      {selectedMode === 'none' && (
        <div>
          <WelcomingSection title='Rules' rules={QWACKEMIST_RULES} character={QWACKER_CARDS.alchemist} />
          <QwackerModeSelector handlePlay={handlePlay} />
        </div>
      )}

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
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
              <Image width={150} height={150} src={QWACKER_CARDS.arcanist.src} alt='' />
              <p className='p-3'>{currentText}</p>
            </div>

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
