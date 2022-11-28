import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="text-primary-blue w-full px-6 py-3 shadow">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto">
        <h1 className="font-bold text-lg transition-colors hover:text-primary-dark-blue">
          <Link to="/">Casos de Trânsito</Link>
        </h1>
        <ul>
          <li className="font-bold text-white bg-primary-blue border-primary-blue border-2 rounded px-2 py-1.5 transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue hover:cursor-pointer">
            <Link to="/jogar">Jogar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
