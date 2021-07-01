import './App.css';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'


function App() {
  AOS.init({
    offset: 200,
    duration: 1500
  });
  return (
    <div className="App w-full">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
