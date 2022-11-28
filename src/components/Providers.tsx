import DifficultyProvider from '../contexts/DifficultyContext';
import ScoreProvider from '../contexts/ScoreContext';
import TrafficCaseProvider from '../contexts/TrafficCaseContext';

export default function Providers({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DifficultyProvider>
      <TrafficCaseProvider>
        <ScoreProvider>{children}</ScoreProvider>
      </TrafficCaseProvider>
    </DifficultyProvider>
  );
}
