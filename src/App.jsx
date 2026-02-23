import './App.css';
import Header from './common/Header';
import BackToTop from './common/BackToTop';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/skills/Skills';
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <BackToTop />
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
