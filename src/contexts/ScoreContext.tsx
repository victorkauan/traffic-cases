import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

interface answeredCasesData {
  id: number;
  correct: boolean;
}

interface ScoreContextProps {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  answeredCases: answeredCasesData[];
  setAnsweredCases: Dispatch<SetStateAction<answeredCasesData[]>>;
}

const ScoreContext = createContext({} as ScoreContextProps);

export default function ScoreProvider({ children }: PropsWithChildren<{}>) {
  const [score, setScore] = useState<number>(0);
  const [answeredCases, setAnsweredCases] = useState<answeredCasesData[]>([]);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        answeredCases,
        setAnsweredCases,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider.');
  }
  const { score, setScore, answeredCases, setAnsweredCases } = context;
  return { score, setScore, answeredCases, setAnsweredCases };
}
