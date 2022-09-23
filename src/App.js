import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Tech />
    </div>
  );
}

export default App;
