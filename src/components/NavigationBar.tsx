import { Link } from 'react-router-dom';
import { VscDebugBreakpointLogUnverified as ScoreIcon } from 'react-icons/vsc';
import Container from './Container';
import { useScore } from '../contexts/ScoreContext';

export default function NavigationBar() {
  const { score } = useScore();

  return (
    <nav className="bg-white text-primary-blue w-full py-3 shadow fixed">
      <Container className="flex items-center justify-between">
        <h1>
          <Link
            to="/"
            className="font-bold text-lg text-center transition-colors hover:text-primary-dark-blue"
          >
            Casos de Trânsito
          </Link>
        </h1>
        <div className="flex items-center justify-center gap-6">
          <span className="font-bold whitespace-nowrap flex items-center justify-center transition-colors hover:text-primary-dark-blue hover:cursor-pointer">
            <ScoreIcon className="text-xl" />
            {score} {score > 1 ? 'pontos' : 'ponto'}
          </span>
          <ul>
            <li>
              <Link
                to="/jogar"
                className="font-bold text-white bg-primary-blue border-primary-blue border-2 rounded px-2 py-1.5 block transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue hover:cursor-pointer"
              >
                Jogar
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
