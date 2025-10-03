import { useRef } from 'react'
import Parenthes from '@/assets/icons/Parenthes'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import styles from './Hero.module.scss'

const Hero = ({data}) => {
  const letsTalkRef = useRef(null)
  const hasTriggeredRef = useRef(false)

  const handleHeroHover = () => {
    if (letsTalkRef.current) {
      // Only trigger shuffle once per hover session
      if (!hasTriggeredRef.current) {
        letsTalkRef.current.triggerShuffle()
        hasTriggeredRef.current = true
      }
      letsTalkRef.current.setHover(true)
    }
  }

  const handleHeroLeave = () => {
    if (letsTalkRef.current) {
      letsTalkRef.current.setHover(false)
      hasTriggeredRef.current = false // Reset for next hover session
    }
  }

  return (
    <section className={`g-container mb ${styles.container}`} onMouseEnter={handleHeroHover} onMouseLeave={handleHeroLeave}>
        <div className={styles.hero}>
          <span className={styles.hero__left}><Parenthes/></span>
          <h1 className={styles.hero__title}>{data.title}</h1>
          <span className={styles.hero__right}>
            <Parenthes/>
          </span>
        </div>
        <LetsTalk ref={letsTalkRef} effect={data.effect} />
    </section>
  )
}

export default Hero
