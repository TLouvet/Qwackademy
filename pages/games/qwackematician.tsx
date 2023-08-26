import PageLayout from '@/components/Layout/PageLayout';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { QWACKEMATICIAN_RULES } from '@/data/rules/qwackematician';
import { Button } from 'react-bootstrap';

export default function QwackematicianPage() {
  return (
    <PageLayout withBackLink>
      <h1>The Qwackematician Sequence</h1>

      <WelcomingSection title='Rules' rules={QWACKEMATICIAN_RULES} character={QWACKER_CARDS.mathematician} />
      <Button className='me-3'>Play as Mini Qwacker</Button>
      <Button>Play as Qwacker Master</Button>
    </PageLayout>
  );
}
