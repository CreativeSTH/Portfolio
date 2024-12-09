import './styles/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
