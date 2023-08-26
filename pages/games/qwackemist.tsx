import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMIST_RULES } from '@/data/rules/qwackemist';
import { Button } from 'react-bootstrap';

export default function QwackemistPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Qwackemist Potion Course</h1>
      <WelcomingSection title='Rules' rules={QWACKEMIST_RULES} character={QWACKER_CARDS.alchemist} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
