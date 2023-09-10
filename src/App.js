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
import ScrollToTop from 'react-scroll-to-top'
import {MdArrowUpward} from 'react-icons/md'
function App() {
  return (
    <div className="App dark:bg-dark-bg">
      <Navbar />
      <ScrollToTop smooth component={<MdArrowUpward className="mx-auto font-bold text-3xl text-light-primary"/>} className="mx-auto"/>
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
