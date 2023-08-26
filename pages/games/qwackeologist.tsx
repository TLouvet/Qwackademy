import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEOLOGIST_RULES } from '@/data/rules/qwackeologist';
import { Button } from 'react-bootstrap';

export default function QwackematicianPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Qwackeologist Patterns</h1>

      <WelcomingSection title='Rules' rules={QWACKEOLOGIST_RULES} character={QWACKER_CARDS.archelologist} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
