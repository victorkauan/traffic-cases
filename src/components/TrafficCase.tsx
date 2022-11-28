import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useScore } from '../contexts/ScoreContext';
import AnswerButton from './AnswerButton';
import trafficCases from '../mock/cases.json';

interface TrafficCaseProps {
  id: number;
  title: string;
  description: string;
  youtube_code: string;
  guilty: number;
}

export default function TrafficCase() {
  const [trafficCase, setTrafficCase] = useState<TrafficCaseProps | null>();

  const { score, setScore, answeredCases, setAnsweredCases } = useScore();

  const { id: parameterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTrafficCase(trafficCases.find(({ id }) => id === Number(parameterId)));
  }, [parameterId]);

  const alreadyAnswered = answeredCases.some(
    ({ id }) => id === Number(parameterId)
  );

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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">{trafficCase?.title}</h2>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trafficCase?.youtube_code}`}
          className="w-full aspect-video rounded"
        ></iframe>
        <div>
          <h3 className="font-bold">Descrição do caso:</h3>
          <p>{trafficCase?.description}</p>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="font-bold text-lg text-center pb-4">
          Quem você considera o culpado pelo incidente/acidente?
        </h2>
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 mml:flex-row">
          <AnswerButton
            guilty="bike"
            onClick={verifyAnswer}
            disabled={alreadyAnswered}
          />
          <AnswerButton
            guilty="both"
            onClick={verifyAnswer}
            disabled={alreadyAnswered}
          />
          <AnswerButton
            guilty="car"
            onClick={verifyAnswer}
            disabled={alreadyAnswered}
          />
        </div>
      </div>
    </div>
  );
}
