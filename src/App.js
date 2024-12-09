import './styles/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
