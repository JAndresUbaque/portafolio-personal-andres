import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Projects />      
      <Certifications/>
      <Services/>
      <Contact/>
      {/* Agrega más secciones después */}
    </div>
  );
}

export default App;