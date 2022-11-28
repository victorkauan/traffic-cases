import DifficultyProvider from '../contexts/DifficultyContext';
import ScoreProvider from '../contexts/ScoreContext';
import TrafficCaseProvider from '../contexts/TrafficCaseContext';

export default function Providers({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DifficultyProvider>
      <TrafficCaseProvider>
        <ScoreProvider>
          <div className={className}>{children}</div>
        </ScoreProvider>
      </TrafficCaseProvider>
    </DifficultyProvider>
  );
}
