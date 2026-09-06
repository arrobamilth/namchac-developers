import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>NamChac</span>
        <p>&copy; {new Date().getFullYear()} NamChac Digital Craft Studio. All rights reserved.</p>
        <a href="#home" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
