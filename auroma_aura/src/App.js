import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Login" element={<Home />}></Route>
          <Route path="/" element={<><Header /><Home /></>}></Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
