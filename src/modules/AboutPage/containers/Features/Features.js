import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Features.module.scss'
import ProjectHover from '../../components/ProjectHover/ProjectHover'

const Features = ({data, title}) => {
  return (
    <section className='g-container mb'>
      <SectionTitle title={title}/>
      <div className={styles.features}>
        <ProjectHover data={data} />
      </div>
    </section>
  )
}

export default Features
