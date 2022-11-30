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

interface AnsweredCasesContextProps {
  answeredCases: answeredCasesData[];
  setAnsweredCases: Dispatch<SetStateAction<answeredCasesData[]>>;
}

const AnsweredCasesContext = createContext({} as AnsweredCasesContextProps);

export default function AnsweredCasesProvider({
  children,
}: PropsWithChildren<{}>) {
  const [answeredCases, setAnsweredCases] = useState<answeredCasesData[]>([]);

  return (
    <AnsweredCasesContext.Provider
      value={{
        answeredCases,
        setAnsweredCases,
      }}
    >
      {children}
    </AnsweredCasesContext.Provider>
  );
}

export function useAnsweredCase() {
  const context = useContext(AnsweredCasesContext);
  if (!context) {
    throw new Error(
      'useAnsweredCase must be used within a AnsweredCasesProvider.'
    );
  }
  const { answeredCases, setAnsweredCases } = context;
  return { answeredCases, setAnsweredCases };
}
