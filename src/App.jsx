import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ProjectSlider from './components/ProjectSlider.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProjectSlider />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
