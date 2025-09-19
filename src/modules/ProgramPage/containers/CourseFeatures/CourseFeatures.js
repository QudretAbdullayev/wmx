import styles from './CourseFeatures.module.scss'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import SectionTitle from '@/components/SectiontTitle/SectiontTitle'

const CourseFeatures = ({ data, color }) => {
  return (
    <section className='g-container mb'>
      <SectionTitle title={data.section_title} />
      <div className={`${styles.features} ml`}>
        <h2 className={styles.features__title}>{data.main_title}</h2>
        <p className={styles.features__description}>{data.main_description}</p>
        <div className={styles.features__cards}>
            {data.feature_cards.map((card, index) => (
          <FeatureCard key={index} title={card.title} description={card.description} color={color}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default CourseFeatures
