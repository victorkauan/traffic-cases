import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AnswerButton from './AnswerButton';
import { useTrafficCase } from '../contexts/TrafficCaseContext';
import { useScore } from '../contexts/ScoreContext';
import trafficCases from '../mock/cases.json';

export default function TrafficCase() {
  const { answeredCases } = useScore();
  const { trafficCase, setTrafficCase, setAlreadyAnswered } = useTrafficCase();

  const { id: parameterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Number(parameterId) >= trafficCases.length) {
      navigate(`/jogar/${trafficCases.length - 1}`);
      return;
    }

    setAlreadyAnswered(
      answeredCases.some(({ id }) => id === Number(parameterId))
    );
    setTrafficCase(trafficCases.find(({ id }) => id === Number(parameterId)));
  }, [parameterId]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">{trafficCase?.title}</h2>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trafficCase?.youtube_code}`}
          className="w-full aspect-video rounded"
        ></iframe>
        <div>
          <h3 className="font-bold mb-1">Descrição do caso:</h3>
          <p>{trafficCase?.description}</p>
        </div>
      </div>
      <hr className="bg-primary-blue" />
      <div>
        <h2 className="font-bold text-lg text-center pb-2">
          Quem você considera o culpado pelo incidente/acidente?
        </h2>
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 mml:flex-row">
          <AnswerButton guilty="bike" />
          <AnswerButton guilty="both" />
          <AnswerButton guilty="car" />
        </div>
      </div>
    </div>
  );
}
