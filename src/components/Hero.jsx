import { useLanguage } from '../i18n/index.jsx'
import wordmarkLockup from '../assets/wordmark-lockup.png'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className={styles.hero}>
      <img
        src={wordmarkLockup}
        alt="Digital Namchac Studio"
        className={styles.wordmark}
      />

      <div className={styles.bottom}>
        <div className={styles.manifesto}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <p>{t('hero.manifesto')}</p>
        </div>

        <div className={styles.badge}>
          <div className={styles.stars} aria-hidden="true">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <p className={styles.badgeStat}>{t('hero.years')}</p>
          <p className={styles.badgeLabel}>{t('hero.experience')}</p>
        </div>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
