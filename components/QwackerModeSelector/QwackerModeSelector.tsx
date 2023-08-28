import { QwackerMode } from '@/features/types';
import { Button } from 'react-bootstrap';

type QwackerModeSelectorProps = {
  handlePlay: (mode: QwackerMode) => void;
};

export default function QwackerModeSelector({ handlePlay }: QwackerModeSelectorProps) {
  return (
    <>
      <Button className='me-3' onClick={() => handlePlay('miniqwacker')}>
        Play as Mini Qwacker
      </Button>
      <Button onClick={() => handlePlay('qwackermaster')}>Play as Qwacker Master</Button>
    </>
  );
}
