import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useScore } from '../contexts/ScoreContext';
import { useDifficulty } from '../contexts/DifficultyContext';
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
  const [numberOfPieces, setNumberOfPieces] = useState<number>(100);

  const { answeredCases } = useScore();
  const { difficulty } = useDifficulty();

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

  let quantityOfCases = 0;
  switch (difficulty) {
    case 0:
      quantityOfCases = 3;
      break;
    case 1:
      quantityOfCases = 5;
      break;
    case 2:
      quantityOfCases = 10;
      break;
  }

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
            : 'Sua resposta não está de acordo com a avaliação feita pelos profissionais!'}
        </h2>
        <div>
          <h2 className="font-bold mb-1">Explicação do caso:</h2>
          <p>{trafficCase?.explanation}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/jogar/${
              answeredCases.length >= quantityOfCases
                ? 'pontuacao'
                : Number(parameterId) + 1
            }`}
            className="font-bold text-center text-xl text-white w-full bg-primary-blue border-primary-blue border-2 rounded px-2 py-1.5 transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue hover:cursor-pointer mml:w-fit"
          >
            {answeredCases.length >= quantityOfCases
              ? 'Finalizar'
              : 'Continuar'}
          </Link>
        </div>
      </div>
    </>
  );
}
