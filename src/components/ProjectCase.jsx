import { useLanguage } from '../i18n/index.jsx'
import Reveal from './Reveal.jsx'
import styles from './ProjectCase.module.css'

export default function ProjectCase({ id, index, title, subtitle, description, tags, images, accent }) {
  const { t } = useLanguage()

  return (
    <section id={id} className={styles.case} style={{ '--accent': accent }}>
      <div className={`container ${styles.header}`}>
        <Reveal>
          <p className="kicker">{`${t('projectCase.project')} ${index}`}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          {description && <p className={styles.description}>{description}</p>}
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </div>

      <Reveal delay={150} className="container">
        <div className={styles.panel}>
          <div className={styles.images}>
            {images.map((src, i) => (
              <img key={i} src={src} alt="" className={styles.image} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
