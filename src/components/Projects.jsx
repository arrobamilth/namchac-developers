import { useLanguage } from '../i18n/index.jsx'
import Reveal from './Reveal.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useLanguage()

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
          <p className="kicker">{t('projects.kicker')}</p>
          <h2 className={styles.title}>{t('projects.title')}</h2>
        </Reveal>
      </div>
    </section>
  )
}
