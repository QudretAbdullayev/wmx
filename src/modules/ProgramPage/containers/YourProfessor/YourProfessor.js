import styles from './YourProfessor.module.scss'
import EffectCard from '../../components/EffectCard/EffectCard'
import Description from '@/components/Description/Description';
import SectionTitle from '@/components/SectiontTitle/SectiontTitle'

const YourProfessor = ({ data }) => {
  return (
    <section className='g-container mb'>
        <SectionTitle title={data.section_title} />
        <div className={`${styles.professor} ml`}>
            <EffectCard
              background_image={data.background_image}
              front_image={data.front_image}
              front_title={data.front_image_title}
            />
            <Description title={data.title} description={data.description} classNameDescription={styles.professor__description} classNameTitle={styles.professor__title} />
        </div>
    </section>
  )
}

export default YourProfessor;
