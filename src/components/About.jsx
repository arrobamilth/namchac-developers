import Reveal from './Reveal'
import styles from './About.module.css'

const PILLARS = [
  {
    num: '01',
    title: 'Brand',
    text: 'Identities with a voice — marks, palettes and systems built to be recognised, not just seen.',
  },
  {
    num: '02',
    title: 'Illustration',
    text: 'Original character and editorial art that gives a project a face people remember.',
  },
  {
    num: '03',
    title: 'Web',
    text: 'Interfaces that move like the brand behind them — fast, considered, a little unexpected.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.intro}>
          <p className="kicker">About the studio</p>
          <h2 className={styles.heading}>
            Part atelier, part <span className={styles.accent}>lab</span> —
            we craft digital work with a hand-drawn soul.
          </h2>
          <p className={styles.lede}>
            NamChac Digital Craft Studio blends illustration instincts with
            product thinking. Every brand, page and pixel starts as a sketch
            before it becomes a system — so the work stays alive, textured,
            unmistakably made by hand.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 120} className={styles.card}>
              <span className={styles.num}>{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
