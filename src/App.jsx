import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminStats from './components/AdminStats';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <AdminStats />
      <Skills/>
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