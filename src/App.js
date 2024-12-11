import './styles/App.css';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroText from './components/HeroText';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Fter from './components/Footer';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Nav />
      <Hero />
      <HeroText />
      <Skills />
      <Project />
      <Contact />
      <Fter />
    </div>
  );
}

export default App;
