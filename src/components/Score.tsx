import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { GiThreeFriends } from 'react-icons/gi';
import { useDifficulty } from '../contexts/DifficultyContext';
import { useScore } from '../contexts/ScoreContext';

export default function Score() {
  const [numberOfPieces, setNumberOfPieces] = useState<number>(100);

  const { score, answeredCases } = useScore();
  const { difficulty } = useDifficulty();

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

  const correctAnswers = answeredCases.reduce((accumulator, answeredCase) => {
    return answeredCase.correct ? accumulator + 1 : accumulator;
  }, 0);

  score > Math.floor(quantityOfCases / 2) &&
    setTimeout(() => {
      setNumberOfPieces(0);
    }, 2000);

  return (
    <>
      {score > Math.floor(quantityOfCases / 2) && (
        <Confetti
          className="w-screen h-screen"
          numberOfPieces={numberOfPieces}
        />
      )}
      <div className="flex flex-col gap-12">
        <div className="text-center flex flex-col gap-2">
          <p>Você respondeu todos os casos.</p>
          <h2 className="font-bold text-2xl flex items-center justify-center">
            Sua pontuação final é {score} {score > 1 ? 'pontos' : 'ponto'}!
          </h2>
          <p className="text-lg">
            Você acertou <span className="font-bold">{correctAnswers}</span> de{' '}
            <span className="font-bold">{quantityOfCases}</span> casos.
          </p>
        </div>
        <div>
          <div className="text-5xl flex items-center justify-center gap-2">
            <FaMotorcycle />
            <GiThreeFriends />
            <AiFillCar />
          </div>
          <p className="font-bold text-lg italic text-center">
            Dirija com segurança!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={'/jogar'}
            className="font-bold text-center text-xl text-white w-full bg-primary-blue border-primary-blue border-2 rounded px-2 py-1.5 transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue hover:cursor-pointer mml:w-fit"
          >
            Jogar novamente
          </Link>
        </div>
      </div>
    </>
  );
}
