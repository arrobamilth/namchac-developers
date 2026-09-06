import { useEffect, useRef } from 'react'
import frame1 from '../assets/frame1.jpeg'
import frame2 from '../assets/frame2.jpeg'
import frame3 from '../assets/frame3.jpeg'
import styles from './ProjectsCarousel.module.css'

const BASE = [
  { src: frame1, rot: -6, y: 14 },
  { src: frame2, rot: 5, y: -18 },
  { src: frame3, rot: -3, y: 8 },
  { src: frame1, rot: 7, y: -10 },
  { src: frame2, rot: -5, y: 16 },
  { src: frame3, rot: 4, y: -12 },
]

const ITEMS = [...BASE, ...BASE]

export default function ProjectsCarousel() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    let unitWidth = 0
    const measure = () => {
      const children = track.children
      if (children.length < BASE.length + 1) return
      unitWidth = children[BASE.length].offsetLeft - children[0].offsetLeft
    }
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(track)

    let offset = 0
    let frameId
    const speed = 0.45

    const tick = () => {
      offset += speed
      if (unitWidth > 0 && offset >= unitWidth) offset -= unitWidth
      track.style.transform = `translateX(${-offset}px)`

      const sectionRect = viewport.getBoundingClientRect()
      const centerX = sectionRect.left + sectionRect.width / 2
      const centerY = sectionRect.top + sectionRect.height / 2
      const focusRange = Math.min(sectionRect.width, sectionRect.height) * 0.32

      itemRefs.current.forEach((el) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const itemX = r.left + r.width / 2
        const itemY = r.top + r.height / 2
        const dist = Math.hypot(itemX - centerX, itemY - centerY)
        const t = Math.min(1, dist / focusRange)
        el.style.filter = `grayscale(${(t * 100).toFixed(0)}%)`
      })

      frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      ro.disconnect()
    }
  }, [])

  return (
    <div className={styles.viewport} ref={viewportRef} aria-hidden="true">
      <div className={styles.diagonal}>
        <div className={styles.track} ref={trackRef}>
          {ITEMS.map((item, i) => (
            <img
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              src={item.src}
              alt=""
              draggable="false"
              className={styles.phone}
              style={{ '--rot': `${item.rot}deg`, '--ty': `${item.y}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
