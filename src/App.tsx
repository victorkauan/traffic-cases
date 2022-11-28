import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from './components/Container';
import NavigationBar from './components/NavigationBar';
import TrafficCase from './components/TrafficCase';

export default function App() {
  return (
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
            <Route path=":id" element={<TrafficCase />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}
