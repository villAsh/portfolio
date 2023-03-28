import { Routes,Route } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Timeline from './Components/Timeline';
import HomePage from './Pages/HomePage';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='About' element={<About />} />
        <Route path='Timeline' element={<Timeline />} />
        <Route path='Skills' element={<Skills />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      {/* <Navbar />
      <Home />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <InTouch />
      <Footer /> */}
      <Footer />
    </div>
  );
}

export default App;
