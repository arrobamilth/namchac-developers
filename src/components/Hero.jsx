import wordmarkLockup from '../assets/wordmark-lockup.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        src={wordmarkLockup}
        alt="Digital Namchac Studio"
        className={styles.wordmark}
      />

      <div className={styles.manifesto}>
        <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
        <p>NamChac transformed our ideas into a polished digital experience.</p>
      </div>

      <div className={styles.badge}>
        <div className={styles.stars} aria-hidden="true">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
        <p className={styles.badgeStat}>+1 Years</p>
        <p className={styles.badgeLabel}>Experience</p>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
