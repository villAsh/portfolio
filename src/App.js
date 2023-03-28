
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import InTouch from './Components/InTouch';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
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
      <Projects />
      <InTouch />
      <Footer />
    </div>
  );
}

export default App;
