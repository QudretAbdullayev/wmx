import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Features.module.scss'
import ProjectHover from '../../components/ProjectHover/ProjectHover'

const Features = ({data}) => {
  return (
    <section className='g-container mb'>
      <SectionTitle title={data.section_title}/>
      <div className={styles.features}>
        <ProjectHover/>
      </div>
    </section>
  )
}

export default Features
