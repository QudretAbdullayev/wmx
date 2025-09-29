import Parenthes from '@/assets/icons/Parenthes'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import styles from './Hero.module.scss'

const Hero = ({data}) => {
  return (
    <section className="g-container mb">
        <div className={styles.hero}>
          <span className={styles.hero__left}><Parenthes/></span>
          <h1 className={styles.hero__title}>{data.title}</h1>
          <span className={styles.hero__right}>
            <Parenthes/>
          </span>
        </div>
        <LetsTalk/>
    </section>
  )
}

export default Hero
