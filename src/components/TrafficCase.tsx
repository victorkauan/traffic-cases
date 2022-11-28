import { MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import trafficCases from '../mock/cases.json';
import AnswerButton from './AnswerButton';

interface TrafficCaseProps {
  id: number;
  title: string;
  description: string;
  youtube_code: string;
  guilty: number;
}

export default function TrafficCase() {
  const [trafficCase, setTrafficCase] = useState<TrafficCaseProps | null>();

  const { id: parameterId } = useParams();

  useEffect(() => {
    setTrafficCase(trafficCases.find(({ id }) => id === Number(parameterId)));
  }, []);

  function verifyAnswer(event: MouseEvent<HTMLButtonElement>) {
    const { value } = event.currentTarget;

    console.log(Number(value) === trafficCase?.id);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">{trafficCase?.title}</h2>
        <iframe
          src={`https://www.youtube.com/embed/${trafficCase?.youtube_code}`}
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
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 mm:flex-row">
          <AnswerButton guilty="bike" onClick={verifyAnswer} />
          <AnswerButton guilty="both" onClick={verifyAnswer} />
          <AnswerButton guilty="car" onClick={verifyAnswer} />
        </div>
      </div>
    </div>
  );
}
