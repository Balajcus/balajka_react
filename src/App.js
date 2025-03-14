import './App.css';
import About from './pages/about';
import Home from './pages/about';
import {Routes, Route} from 'react-router';

function App() {
  return (
      <Routes>
        <Route paht="/" element={Home}></Route>
        <Route paht="/about" element={About}></Route>
      </Routes>
  );
}

export default App;
