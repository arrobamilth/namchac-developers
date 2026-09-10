import Reveal from './Reveal'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <video
        className={styles.videoBg}
        src="/media/projects-bg.mp4"
        poster="/media/projects-bg-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className={styles.videoOverlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.heading}>
          <p className="kicker">Get started</p>
          <h2 className={styles.title}>Projects</h2>
        </Reveal>
      </div>
    </section>
  )
}
