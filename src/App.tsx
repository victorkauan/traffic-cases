import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-3xl font-bold">Hello world!</h1>}
        />
        <Route path="/jogar" element={<i></i>} />
      </Routes>
    </Router>
  );
}
