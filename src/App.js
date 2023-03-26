
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Timeline from './Components/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Timeline />
    </div>
  );
}

export default App;
