import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Menu from './components/Menu';
import TrafficCase from './components/TrafficCase';
import Explanation from './components/Explanation';
import Providers from './components/Providers';

export default function App() {
  return (
    <Providers>
      <Router>
        <NavigationBar />
        <Container className="text-primary-blue my-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogar">
              <Route index element={<Menu />} />
              <Route path=":id">
                <Route index element={<TrafficCase />} />
                <Route path="explicacao" element={<Explanation />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Router>
    </Providers>
  );
}
