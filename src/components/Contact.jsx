import { useLanguage } from '../i18n/index.jsx'
import Reveal from './Reveal.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className="kicker">{t('contact.kicker')}</p>
          <h2 className={styles.title}>
            {t('contact.titleLine1')}
            <br />
            {t('contact.titleLine2Prefix')}
            <span className={styles.accent}>{t('contact.titleWord')}</span>
          </h2>
        </Reveal>

       

        <Reveal delay={150} className={styles.row}>
          <div>
            <p className={styles.metaLabel}>{t('contact.title')}</p>
            <a href="mailto:namchacfilms@gmail.com" className={styles.emailLink}>
              namchacfilms@gmail.com
            </a>
            <br></br>
            <div>
              <a
              href="https://wa.me/573017644970"
              target="_blank"
              rel="noreferrer"
              className={styles.whatsapp}
            >
              <ion-icon name="logo-whatsapp" aria-hidden="true" />
              {t('contact.whatsapp')}
            </a>
            </div>
          </div>

          <div className={styles.meta}>
            <div>
              <p className={styles.metaLabel}>{t('contact.socials')}</p>
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
              <p className={styles.metaLabel}>{t('contact.basedIn')}</p>
              <p className={styles.metaValue}>{t('contact.location')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
