import { useLanguage } from '../i18n/index.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>NamChac</span>
        <p>&copy; {new Date().getFullYear()} NamChac Digital Craft Studio. {t('footer.rights')}</p>
        <a href="#home" className={styles.top}>
          {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  )
}
