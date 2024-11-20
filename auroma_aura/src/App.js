import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as router,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>

  );
}

export default App;
