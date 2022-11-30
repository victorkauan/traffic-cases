import DifficultyProvider from '../contexts/DifficultyContext';
import ScoreProvider from '../contexts/ScoreContext';
import AnsweredCasesProvider from '../contexts/AnsweredCasesContext';
import TrafficCaseProvider from '../contexts/TrafficCaseContext';

export default function Providers({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DifficultyProvider>
      <TrafficCaseProvider>
        <ScoreProvider>
          <AnsweredCasesProvider>
            <div className={className}>{children}</div>
          </AnsweredCasesProvider>
        </ScoreProvider>
      </TrafficCaseProvider>
    </DifficultyProvider>
  );
}
