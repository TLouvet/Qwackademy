import { QwackerMode } from '@/features/types';
import QwackerModeSelector from '../QwackerModeSelector/QwackerModeSelector';
import WelcomingSection from '../WelcomingSection/WelcomingSection';

type GamePageIntroProps = {
  selectedMode: string;
  handlePlay: (mode: QwackerMode) => void;
  rules: string[];
  character: any; // TODO remove any
};

export function GamePageIntro({ selectedMode, handlePlay, rules, character }: GamePageIntroProps) {
  if (selectedMode !== 'none') {
    return null;
  }

  return (
    <div>
      <WelcomingSection title='Rules' rules={rules} character={character} />
      <QwackerModeSelector handlePlay={handlePlay} />
    </div>
  );
}
