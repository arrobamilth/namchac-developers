import { useLanguage } from './i18n/index.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ProjectCase from './components/ProjectCase.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import nanaLanding from './assets/nana-landing.png'
import nanaDashboard from './assets/nana-dashboard.png'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProjectCase
          id="nana-studio"
          index="01"
          title={t('projectCase.title')}
          subtitle={t('projectCase.subtitle')}
          description={t('projectCase.description')}
          tags={t('projectCase.tags')}
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
