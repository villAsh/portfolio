
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Timeline from './Components/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Skills />
    </div>
  );
}

export default App;
