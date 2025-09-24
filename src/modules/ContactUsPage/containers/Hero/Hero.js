import styles from './Hero.module.scss'

const Hero = ({data}) => {
  return (
    <section className="g-container mb">
        <div className={styles.hero}>
          <span className={styles.hero__paranthes}>(</span>
          <h1 className={styles.hero__title}>{data.title}</h1>
          <span className={styles.hero__paranthes}>
            )
          </span>
        </div>
    </section>
  )
}

export default Hero
