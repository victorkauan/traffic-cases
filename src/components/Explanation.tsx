import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useScore } from '../contexts/ScoreContext';
import trafficCases from '../mock/cases.json';

interface TrafficCaseProps {
  id: number;
  title: string;
  description: string;
  youtube_code: string;
  guilty: number;
  explanation: string;
}

export default function Explanation() {
  const [trafficCase, setTrafficCase] = useState<TrafficCaseProps | null>();
  const [correct, setCorrect] = useState<boolean>(false);
  const [numberOfPieces, setNumberOfPieces] = useState<number>(200);

  const { answeredCases } = useScore();

  const { id: parameterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const answeredCase = answeredCases.find(
      ({ id }) => id === Number(parameterId)
    );

    if (!answeredCase) {
      navigate(`/jogar/${parameterId}`);
      return;
    }

    setCorrect(answeredCase.correct);

    setTrafficCase(trafficCases.find(({ id }) => id === Number(parameterId)));
  }, [parameterId]);

  correct &&
    setTimeout(() => {
      setNumberOfPieces(0);
    }, 2000);

  return (
    <>
      {correct && (
        <Confetti
          className="w-screen h-screen"
          numberOfPieces={numberOfPieces}
        />
      )}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">{trafficCase?.title}</h2>
        <h2 className="font-bold text-center text-2xl">
          {correct
            ? 'Parabéns, sua opinião está de acordo com a avaliação dos profissionais!'
            : 'Sua resposta não está de acordo com a avaliação dada pelos profissionais!'}
        </h2>
        <div>
          <h2 className="font-bold mb-1">Explicação do caso:</h2>
          <p>{trafficCase?.explanation}</p>
        </div>
      </div>
    </>
  );
}
