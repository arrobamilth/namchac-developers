import { useLanguage } from '../i18n/index.jsx'
import Reveal from './Reveal.jsx'
import styles from './About.module.css'

export default function About() {
  const { t } = useLanguage()

  const pillars = t('about.pillars')

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.intro}>
          <p className="kicker">{t('about.kicker')}</p>
          <h2 className={styles.heading}>{t('about.heading')}</h2>
          <p className={styles.lede}>{t('about.lede')}</p>
        </Reveal>

        <div className={styles.grid}>
          {pillars.map((pillar, i) => (
            <Reveal key={i} delay={i * 120} className={styles.card}>
              <span className={styles.num}>0{i + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
