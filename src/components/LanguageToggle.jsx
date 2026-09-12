import { useLanguage } from '../i18n/index.jsx'
import styles from './LanguageToggle.module.css'

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage()

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={`Switch to ${lang === 'es' ? 'English' : 'Español'}`}
    >
      <span className={`${styles.option} ${lang === 'es' ? styles.active : ''}`}>
        ES
      </span>
      <span className={`${styles.option} ${lang === 'en' ? styles.active : ''}`}>
        EN
      </span>
      <span
        className={styles.slider}
        style={{ transform: `translateX(${lang === 'en' ? '100%' : '0'})` }}
      />
    </button>
  )
}
