import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App wrapper">
      <Navbar className='navbar'/>
      <div className='parallax' > 
        <Hero className='hero-baby'/>
        <img src='/world.png' alt='image of the world' className='world'/>
        <img src='/ball.png' alt='image of the ball' className='ball'/>
        <img src='/laptop.png' alt='image of the laptop' className='laptop'/>
        <img src='/netwrok.png' alt='image of the network' className='network'/>
        <div className='background'></div>
        <span className='A'>A</span>
        <span className='B'>B</span>
        <span className='E'>E</span>
        <span className='L'>L</span>
      </div>
        <About/>
        <Education/>
        <Projects/>
        <Interests/>
        <Contact/>
    </div>
  );
}

export default App;
