import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { Button } from 'react-bootstrap';
import PageLayout from '@/components/Layout/PageLayout';
import { PSYCHOQWACK_RULES } from '@/data/rules/psychoqwack';

export default function MusiqwackPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Musiqwack Symfony</h1>

      <WelcomingSection title='Rules' rules={PSYCHOQWACK_RULES} character={QWACKER_CARDS.psychoqwack} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
