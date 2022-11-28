import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ul className="flex gap-4 mb-2">
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/test">Teste</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={<h1 className="text-3xl font-bold">Hello world!</h1>}
        />
        <Route
          path="/test"
          element={<h1 className="text-3xl font-bold">Teste!</h1>}
        />
      </Routes>
    </Router>
  );
}
