import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

interface ScoreContextProps {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const ScoreContext = createContext({} as ScoreContextProps);

export default function ScoreProvider({ children }: PropsWithChildren<{}>) {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
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
  const { score, setScore } = context;
  return { score, setScore };
}
