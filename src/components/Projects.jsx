import Reveal from './Reveal'
import ProjectsCarousel from './ProjectsCarousel'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <ProjectsCarousel />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.heading}>
          <p className="kicker">Get started</p>
          <h2 className={styles.title}>Projects</h2>
        </Reveal>
      </div>
    </section>
  )
}
