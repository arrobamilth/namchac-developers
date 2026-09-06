import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectCase from './components/ProjectCase'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import nanaLanding from './assets/nana-landing.png'
import nanaDashboard from './assets/nana-dashboard.png'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProjectCase
          id="nana-studio"
          index="01"
          title="NANA Studio"
          subtitle="Photography Portfolio & Client Management Platform"
          description="Sistema web diseñado para optimizar la gestión de un estudio creativo. Incorpora un portafolio profesional, administración de clientes y proyectos, galerías privadas, seguimiento del estado de los trabajos, control de descargas e integración con servicios en la nube para el almacenamiento de fotografías y videos."
          tags={['Web Design', 'Dashboard', 'Branding']}
          images={[nanaLanding, nanaDashboard]}
          accent="#5c1a1f"
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
