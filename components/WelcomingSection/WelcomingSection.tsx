import { Row, Col } from 'react-bootstrap';
import CharacterCard from '../CharacterCard/CharacterCard';

type WelcomingSectionProps = {
  title: string;
  rules: string[];
  character: { name: string; src: string };
};

export default function WelcomingSection({ title, rules, character }: WelcomingSectionProps) {
  return (
    <>
      <h2>{title}</h2>
      <Row style={{ display: 'flex' }}>
        <Col xs={12} md={4}>
          <CharacterCard {...character} />
        </Col>
        <Col>
          {rules.map((rule, id) => (
            <p key={id}>{rule}</p>
          ))}
        </Col>
      </Row>
    </>
  );
}
