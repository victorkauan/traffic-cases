import { Link } from 'react-router-dom';
import Container from './Container';

export default function NavigationBar() {
  return (
    <nav className="text-primary-blue w-full py-3 shadow">
      <Container className="flex items-center justify-between">
        <h1>
          <Link
            to="/"
            className="font-bold text-lg transition-colors hover:text-primary-dark-blue"
          >
            Casos de Trânsito
          </Link>
        </h1>
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
      </Container>
    </nav>
  );
}
