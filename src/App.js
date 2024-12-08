import './styles/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Fter from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Fter />
    </div>
  );
}

export default App;
