import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

interface DifficultyContextProps {
  difficulty: number;
  setDifficulty: Dispatch<SetStateAction<number>>;
}

const DifficultyContext = createContext({} as DifficultyContextProps);

export default function DifficultyProvider({
  children,
}: PropsWithChildren<{}>) {
  const [difficulty, setDifficulty] = useState<number>(0);

  return (
    <DifficultyContext.Provider
      value={{
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </DifficultyContext.Provider>
  );
}

export function useDifficulty() {
  const context = useContext(DifficultyContext);
  if (!context) {
    throw new Error('useDifficulty must be used within a DifficultyProvider.');
  }
  const { difficulty, setDifficulty } = context;
  return { difficulty, setDifficulty };
}
