import CharacterCard from '@/components/CharacterCard/CharacterCard';
import WelcomingSection from '@/components/WelcomingSection/WelcomingSection';
import { QWACKER_CARDS } from '@/data/qwacker-cards';
import { HOME_RULES } from '@/data/rules/homerules';
import { useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  const cardsToMap = useMemo(() => Object.values(QWACKER_CARDS).slice(1), []);

  return (
    <Container>
      <h1>QWACKADEMY</h1>

      <Button>Join the Qwackers</Button>
      <WelcomingSection title='A Welcoming Word' rules={HOME_RULES} character={QWACKER_CARDS.omega} />
      <h2>Pick your Trainer </h2>

      <Row className='g-5'>
        {cardsToMap.map((card) => (
          <Col xs={12} md={4} key={card.name}>
            <CharacterCard {...card} withPlayButton />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
