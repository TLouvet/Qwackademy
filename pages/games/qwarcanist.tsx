import PageLayout from '@/components/Layout/PageLayout';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKANIST_RULES } from '@/data/rules/qwackanist';
import { Button } from 'react-bootstrap';
import GameScreenTop from '@/components/GameScreenTop/GameScreenTop';
import { useQwarckanistLogic } from '@/hooks/qwarcanist/useQwarcanistLogic';
import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';
import { DialogBox } from '@/components/DialogBox/DialogBox';

export default function QwarcanistPage() {
  const { handlePlay, level, selectedMode, handleValidate, handleReplay, isError, canPlay, currentDialog } =
    useQwarckanistLogic();

  return (
    <PageLayout withBackLink title='The Qwackansist Spell Stack'>
      <GamePageIntro
        rules={QWACKANIST_RULES}
        character={QWACKER_CARDS.arcanist}
        handlePlay={handlePlay}
        selectedMode={selectedMode}
      />

      {selectedMode !== 'none' && (
        <section id='game' className='mt-5'>
          <div style={{ minHeight: '100vh' }}>
            <GameScreenTop level={level} selectedMode={selectedMode} handleReplay={handleReplay} isError={isError} />
            <DialogBox imageSrc={QWACKER_CARDS.arcanist.src} text={currentDialog} />

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
