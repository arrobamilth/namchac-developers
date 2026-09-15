import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/index.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const LINKS = [
    { n: '01', href: '#home', label: t('nav.home') },
    { n: '02', href: '#projects', label: t('nav.projects') },
    { n: '03', href: '#about', label: t('nav.about') },
    { n: '04', href: '#contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.bar}`}>
          <div className={styles.actions}>
            <LanguageToggle />
            <a href="#contact" className={styles.cta}>
              {t('header.startProject')}
            </a>
            <button
              type="button"
              className={styles.toggle}
              aria-label={open ? t('header.close') : t('header.menu')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={styles.toggleLabel}>
                {open ? t('header.close') : t('header.menu')}
              </span>
              <span className={`${styles.toggleIcon} ${open ? styles.toggleIconOpen : ''}`}>
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}>
        <nav className={styles.overlayNav}>
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={styles.overlayLink}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
            >
              <span className={styles.overlayNum}>{link.n}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.overlayFooter}>
          <a href="mailto:namchacfilms@gmail.com">namchacfilms@gmail.com</a>
          <div className={styles.overlaySocials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
