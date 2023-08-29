import { QwackerMode } from '@/features/types';
import { Button } from 'react-bootstrap';

type GameScreenTopProps = {
  level: number;
  selectedMode: QwackerMode;
  isError: boolean;
  handleReplay: () => void;
};

export default function GameScreenTop({ level, selectedMode, isError, handleReplay }: GameScreenTopProps) {
  return (
    <div className='d-flex align-items-start'>
      <h2>
        Level {level} - {selectedMode}{' '}
      </h2>
      {isError && (
        <Button onClick={handleReplay} className='ms-3'>
          Try again
        </Button>
      )}
    </div>
  );
}
