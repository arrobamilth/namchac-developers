import Reveal from './Reveal'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className="kicker">Start a project</p>
          <h2 className={styles.title}>
            Let&rsquo;s craft
            <br />
            something <span className={styles.accent}>together</span>.
          </h2>
        </Reveal>

        <Reveal delay={150} className={styles.row}>
          <a href="mailto:hello@namchac.studio" className={styles.emailLink}>
            hello@namchac.studio
          </a>

          <div className={styles.meta}>
            <div>
              <p className={styles.metaLabel}>Socials</p>
              <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer">
                  Behance
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
              </div>
            </div>
            <div>
              <p className={styles.metaLabel}>Based in</p>
              <p className={styles.metaValue}>Remote · Worldwide</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
