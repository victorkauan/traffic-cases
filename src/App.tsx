import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Providers from './components/Providers';
import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import Home from './components/Home';
import Menu from './components/Menu';
import TrafficCase from './components/TrafficCase';
import Explanation from './components/Explanation';
import Score from './components/Score';
import Footer from './components/Footer';

export default function App() {
  return (
    <Providers className="flex flex-col h-screen justify-between">
      <Router>
        <NavigationBar />
        <Container className="text-primary-blue mt-24 mb-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogar">
              <Route index element={<Menu />} />
              <Route path=":id">
                <Route index element={<TrafficCase />} />
                <Route path="explicacao" element={<Explanation />} />
              </Route>
              <Route path="pontuacao" element={<Score />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </Providers>
  );
}
