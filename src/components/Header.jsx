import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const LINKS = [
  { n: '01', href: '#home', label: 'Home' },
  { n: '02', href: '#projects', label: 'Projects' },
  { n: '03', href: '#about', label: 'About' },
  { n: '04', href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
            <a href="#contact" className={styles.cta}>
              Start a project
            </a>
            <button
              type="button"
              className={styles.toggle}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={styles.toggleLabel}>{open ? 'Close' : 'Menu'}</span>
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
          <a href="mailto:hello@namchac.studio">hello@namchac.studio</a>
          <div className={styles.overlaySocials}>
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
      </div>
    </>
  )
}
