import './App.css';
import Header from './Header';
import Home from './Home';
import Chechout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route path="/checkout" element={<><Chechout /></>}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<><Home /></>}></Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
