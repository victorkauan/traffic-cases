import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

interface TrafficCaseProps {
  id: number;
  title: string;
  description: string;
  youtube_code: string;
  guilty: number;
  explanation: string;
}

interface TraficCaseContextProps {
  trafficCase: TrafficCaseProps | undefined;
  setTrafficCase: Dispatch<SetStateAction<TrafficCaseProps | undefined>>;
  alreadyAnswered: boolean;
  setAlreadyAnswered: Dispatch<SetStateAction<boolean>>;
}

const TrafficCaseContext = createContext({} as TraficCaseContextProps);

export default function TrafficCaseProvider({
  children,
}: PropsWithChildren<{}>) {
  const [trafficCase, setTrafficCase] = useState<
    TrafficCaseProps | undefined
  >();
  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);

  return (
    <TrafficCaseContext.Provider
      value={{
        trafficCase,
        setTrafficCase,
        alreadyAnswered,
        setAlreadyAnswered,
      }}
    >
      {children}
    </TrafficCaseContext.Provider>
  );
}

export function useTrafficCase() {
  const context = useContext(TrafficCaseContext);
  if (!context) {
    throw new Error(
      'useTrafficCase must be used within a TrafficCaseProvider.'
    );
  }
  const { trafficCase, setTrafficCase, alreadyAnswered, setAlreadyAnswered } =
    context;
  return { trafficCase, setTrafficCase, alreadyAnswered, setAlreadyAnswered };
}
