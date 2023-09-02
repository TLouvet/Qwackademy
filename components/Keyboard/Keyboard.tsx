import { BlackKey } from './BlackKey';
import { WhiteKey } from './WhiteKey';

type KeyboardProps = {
  onClick: (note: string) => void;
};

export function Keyboard({ onClick }: KeyboardProps) {
  return (
    <div id='keybord' style={{ display: 'flex', height: '200px' }}>
      <WhiteKey id='C-key' onClick={onClick}>
        <BlackKey />
      </WhiteKey>
      <WhiteKey id='D-key' onClick={onClick}>
        <BlackKey />
      </WhiteKey>
      <WhiteKey id='E-key' onClick={onClick} />
      <WhiteKey id='F-key' onClick={onClick}>
        <BlackKey />
      </WhiteKey>
      <WhiteKey id='G-key' onClick={onClick}>
        <BlackKey />
      </WhiteKey>
      <WhiteKey id='A-key' onClick={onClick}>
        <BlackKey />
      </WhiteKey>
      <WhiteKey id='B-key' onClick={onClick} />
    </div>
  );
}
