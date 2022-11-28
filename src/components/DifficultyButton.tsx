import { Link } from 'react-router-dom';
import { useDifficulty } from '../contexts/DifficultyContext';

interface DifficultyButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  difficulty: 'easy' | 'medium' | 'hard';
}

export default function DifficultyButton({
  difficulty,
}: DifficultyButtonProps) {
  const { setDifficulty } = useDifficulty();

  let message: string;
  let difficultyCode: number;
  switch (difficulty) {
    case 'easy':
      message = 'Fácil';
      difficultyCode = 0;
      break;
    case 'medium':
      message = 'Intermediário';
      difficultyCode = 1;
      break;
    case 'hard':
      message = 'Difícil';
      difficultyCode = 2;
      break;
  }

  return (
    <Link
      to="/jogar/1"
      onClick={() => setDifficulty(difficultyCode)}
      className="font-bold text-center text-xl text-white bg-primary-blue border-primary-blue border-2 rounded px-2 py-1.5 block transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue hover:cursor-pointer mml:w-fit"
    >
      {message}
    </Link>
  );
}
