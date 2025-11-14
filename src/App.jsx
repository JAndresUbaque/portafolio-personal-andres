import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Certifications/>
      <Timeline/>
      <Services/>
      <Contact/>
      {/* Agrega más secciones después */}
    </div>
  );
}

export default App;