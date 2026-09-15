import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/index.jsx'
import nanaLanding from '../assets/nana-landing.png'
import nanaDashboard from '../assets/nana-dashboard.png'
import bioearhLanding from '../assets/bioearth-landing.png'
import bioearhDashboard from '../assets/bioearth-dashboard.png'
import styles from './ProjectSlider.module.css'

export default function ProjectSlider() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)
  const touchTriggered = useRef(false)

  const projects = [
    {
      id: 'nana-studio',
      index: '01',
      title: t('projectCase.NanaStudio.title'),
      subtitle: t('projectCase.NanaStudio.subtitle'),
      description: t('projectCase.NanaStudio.description'),
      tags: t('projectCase.NanaStudio.tags'),
      images: [nanaLanding, nanaDashboard],
      accent: '#5c1a1f',
      url: 'https://nana-studio-five.vercel.app/',
    },
    {
      id: 'bio-earth',
      index: '02',
      title: t('projectCase.BioEarth.title'),
      subtitle: t('projectCase.BioEarth.subtitle'),
      description: t('projectCase.BioEarth.description'),
      tags: t('projectCase.BioEarth.tags'),
      images: [bioearhLanding, bioearhDashboard],
      accent: '#1a3d5c',
      url: 'https://bioearth.com.co/',
    },
  ]

  const total = projects.length

  const goTo = useCallback(
    (next) => {
      setActive(next)
    },
    [],
  )

  const next = useCallback(() => {
    goTo((active + 1) % total)
  }, [active, total, goTo])

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total)
  }, [active, total, goTo])

  const handleTouchStart = useCallback((e) => {
    const target = e.target
    touchStartX.current =
      target.closest('a') || target.closest('button') ? null : e.touches[0].clientX
    touchTriggered.current = false
  }, [])

  // Trigger on touchmove (not touchend): many mobile browsers claim the
  // gesture for native vertical scrolling as soon as there's any vertical
  // movement and fire touchcancel instead of touchend, so waiting for
  // touchend made the swipe silently do nothing on real phones.
  const handleTouchMove = useCallback((e) => {
    if (touchStartX.current === null || touchTriggered.current) return
    const delta = touchStartX.current - e.touches[0].clientX
    if (Math.abs(delta) > 50) {
      touchTriggered.current = true
      if (delta > 0) next()
      else prev()
    }
  }, [next, prev])

  const handleTouchEnd = useCallback(() => {
    touchStartX.current = null
    touchTriggered.current = false
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const getSlideClass = (i) => {
    if (i === active) return `${styles.slide} ${styles.slideActive}`
    if (i < active) return `${styles.slide} ${styles.slideLeft}`
    return styles.slide
  }

  return (
    <section
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {projects.map((p, i) => (
        <div key={p.id} className={getSlideClass(i)}>
          <div className={`container ${styles.header}`}>
            <p className="kicker">{`${t('projectCase.project')} ${p.index}`}</p>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>{p.title}</h2>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                >
                  {t('projectCase.visit')}
                </a>
              )}
            </div>
            <p className={styles.subtitle}>{p.subtitle}</p>
            {p.description && <p className={styles.description}>{p.description}</p>}
            {p.tags && p.tags.length > 0 && (
              <div className={styles.tags}>
                {p.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="container">
            <div className={styles.panel} style={{ '--accent': p.accent }}>
              <div className={styles.images}>
                {p.images.map((src, j) => (
                  <img key={`${p.id}-${j}`} src={src} alt="" className={styles.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        onClick={prev}
        aria-label="Previous project"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        onClick={next}
        aria-label="Next project"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <div className={styles.dots}>
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.swipeHint}>
        <span className={styles.swipeIcon}>←</span>
        <span className={styles.swipeText}>{t('projectCase.swipe')}</span>
        <span className={styles.swipeIcon}>→</span>
      </div>
    </section>
  )
}
