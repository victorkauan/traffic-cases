import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useScore } from '../contexts/ScoreContext';
import { useTrafficCase } from '../contexts/TrafficCaseContext';

interface AnswerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  guilty: 'bike' | 'both' | 'car';
}

export default function AnswerButton({ guilty }: AnswerButtonProps) {
  const { score, setScore, answeredCases, setAnsweredCases } = useScore();
  const { trafficCase, alreadyAnswered } = useTrafficCase();

  const { id: parameterId } = useParams();
  const navigate = useNavigate();

  let message;
  let value;
  switch (guilty) {
    case 'bike':
      message = 'Motociclista';
      value = 0;
      break;
    case 'both':
      message = 'Ambos';
      value = 1;
      break;
    case 'car':
      message = 'Motorista';
      value = 2;
      break;
  }

  function verifyAnswer(event: MouseEvent<HTMLButtonElement>) {
    const { value } = event.currentTarget;
    let correct = false;

    if (alreadyAnswered) {
      return;
    }

    if (Number(value) === trafficCase?.guilty) {
      setScore(score + 10);
      correct = true;
    }

    setAnsweredCases([...answeredCases, { id: Number(parameterId), correct }]);
    navigate(`/jogar/${parameterId}/explicacao`);
  }

  return (
    <button
      value={value}
      onClick={verifyAnswer}
      disabled={alreadyAnswered}
      className={`font-bold text-lg text-white w-full bg-primary-blue border-primary-blue border-2 rounded px-3 py-2 transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue disabled:bg-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed mml:w-fit`}
    >
      {message}
    </button>
  );
}
