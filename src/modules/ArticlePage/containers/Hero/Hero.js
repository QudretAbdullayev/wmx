import Square from '@/assets/icons/Square'
import styles from './Hero.module.scss'
import Banner from '@/components/Banner/Banner'

const Hero = ({ data }) => {
    return (
            <section className={styles.hero}>
                <div className="g-container">
                    <div className={`${styles.hero__info} ml`}>
                        {(data.created_title && data.created_date) && <div className={styles.hero__info__item}>
                            <span className={styles.hero__info__item__title}>
                                <Square />
                                ({data.created_title})
                            </span>
                            <span className={styles.hero__info__item__value}>{data.created_date}</span>
                        </div>}
                        {(data.author_title && data.author_name) && <div className={styles.hero__info__item}>
                            <span className={styles.hero__info__item__title}>
                                <Square />
                                ({data.author_title})
                            </span>
                            <span className={styles.hero__info__item__value}>{data.author_name}</span>
                        </div>}
                        {(data.word_title && data.word_count) && <div className={styles.hero__info__item}>
                            <span className={styles.hero__info__item__title}>
                                <Square />
                                ({data.word_title})
                            </span>
                            <span className={styles.hero__info__item__value}>{data.word_count}</span>
                        </div>}
                        {(data.reading_title && data.reading_time) && <div className={styles.hero__info__item}>
                            <span className={styles.hero__info__item__title}>
                                <Square />
                                ({data.reading_title})
                            </span>
                            <span className={styles.hero__info__item__value}>{data.reading_time}</span>
                        </div>}
                    </div>
                </div>
                <Banner src={data.banner} />
            </section>
    )
}

export default Hero 