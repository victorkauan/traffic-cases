import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from './components/Container';
import NavigationBar from './components/NavigationBar';
import TrafficCase from './components/TrafficCase';
import Explanation from './components/Explanation';
import ScoreProvider from './contexts/ScoreContext';

export default function App() {
  return (
    <ScoreProvider>
      <Router>
        <NavigationBar />
        <Container className="text-primary-blue my-6">
          <Routes>
            <Route
              path="/"
              element={<h1 className="text-3xl font-bold">Hello world!</h1>}
            />
            <Route path="/jogar">
              <Route index element={<Link to="/jogar/1">Iniciar</Link>} />
              <Route path=":id">
                <Route index element={<TrafficCase />} />
                <Route path="explicacao" element={<Explanation />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Router>
    </ScoreProvider>
  );
}
