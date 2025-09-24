import styles from './Hero.module.scss'
import Banner from '@/components/Banner/Banner'

const Hero = ({data}) => {
  return (
    <>
        <section className={styles.hero}>
          <div className="g-container">
          <h1 className={`${styles.hero__title} ml`}>{data.title}</h1>
          </div>
        </section>
        <Banner src={data.banner} />
    </>
  )
}

export default Hero 