import { useEffect } from "react"
import Navbar from "./components/Navbar"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./components/Hero"
import Particle from "./components/Particle"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SkillsHero from "./components/SkillsHero"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 200,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div>
      <Particle />
      <Navbar />
      <Hero />
      <SkillsHero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App