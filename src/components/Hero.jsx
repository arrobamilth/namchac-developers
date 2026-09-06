import character from '../assets/character.png'
import namchacSignature from '../assets/namchac-signature.png'
import BrushCraft from './BrushCraft'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true">
        <span className={styles.glowGreen} />
        <span className={styles.glowPurple} />
      </div>

      <p className={styles.signature}>
        A studio by
        <img src={namchacSignature} alt="NamChac" className={styles.signatureImg} />
      </p>

      <h1 className={styles.wordmark}>
        <span>Digital</span>
        <BrushCraft />
        <span>Studio</span>
      </h1>

      <img
        src={character}
        alt="NamChac studio character illustration, reaching a hand toward the viewer"
        className={styles.character}
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
