import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';
import PageLayout from '@/components/Layout/PageLayout';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEOLOGIST_RULES } from '@/data/rules/qwackeologist';

export default function QwackeologistPage() {
  return (
    <PageLayout withBackLink title='The Qwackeologist Patterns'>
      <GamePageIntro
        rules={QWACKEOLOGIST_RULES}
        character={QWACKER_CARDS.archelologist}
        handlePlay={() => {}}
        selectedMode='none'
      />
    </PageLayout>
  );
}
