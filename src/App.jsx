
import './styles/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroText from './components/HeroText';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import Project from './components/Projects';
import FinalHeroText from './components/FinalHeroTex';
import Contact from './components/Contact';
import Fter from './components/Fter';
import Socket from './components/SocketFooter';

function App() {

  return (
    <div className="App">
      <ScrollProgress />
      <Nav />
      <Hero />
      <HeroText />
      <Skills />
      <Project />
      <FinalHeroText />
      <Contact />
      <Fter />
      <Socket />
    </div>
  )
}

export default App
