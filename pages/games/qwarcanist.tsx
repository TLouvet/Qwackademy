import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKANIST_RULES } from '@/data/rules/qwackanist';
import { Button } from 'react-bootstrap';

export default function QwarcanistPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Qwackansist Spell Stack</h1>

      <WelcomingSection title='Rules' rules={QWACKANIST_RULES} character={QWACKER_CARDS.arcanist} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
