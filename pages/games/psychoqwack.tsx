import { QWACKER_CARDS } from '@/data/qwacker-cards';
import PageLayout from '@/components/Layout/PageLayout';
import { PSYCHOQWACK_RULES } from '@/data/rules/psychoqwack';
import { GamePageIntro } from '@/components/GamePageIntro/GamePageIntro';

export default function PsychoqwackPage() {
  return (
    <PageLayout withBackLink title='The Psychoqwack List'>
      <GamePageIntro
        rules={PSYCHOQWACK_RULES}
        character={QWACKER_CARDS.psychoqwack}
        handlePlay={() => {}}
        selectedMode='none'
      />
    </PageLayout>
  );
}
