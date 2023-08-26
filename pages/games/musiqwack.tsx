import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { MUSICQWACK_RULES } from '@/data/rules/musiqwack';
import { Button } from 'react-bootstrap';
import PageLayout from '@/components/Layout/PageLayout';

export default function MusiqwackPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Musiqwack Symfony</h1>

      <WelcomingSection title='Rules' rules={MUSICQWACK_RULES} character={QWACKER_CARDS.musicqwack} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
