import styles from './Team.module.scss'
import ComponentTitle from '@/components/ComponentTitle/ComponentTitle'
import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import ImageMarquee from '../../components/ImageMarquee/ImageMarquee'
const Team = ({data}) => {
  return (
    <section className={styles.team}>
    <div className='g-container ml'>
      <SectionTitle title={data.section_title} />
      <ComponentTitle title={data.component_title} />
    </div>
      <ImageMarquee images={data.photos} />
    <div className="g-container ml">
        <div className={styles.team__container}>
            <div className={styles.team__subtitle}>{data.subtitle}</div>
            <div className={styles.team__text}>
                <div className={styles.team__text__title}>
                    {data.title}
                </div>
                <div className={styles.team__text__description}>
                    {data.description}
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Team
