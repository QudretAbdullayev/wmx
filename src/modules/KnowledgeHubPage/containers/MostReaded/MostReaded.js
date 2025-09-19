import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './MostReaded.module.scss'

const MostReaded = ({data}) => {
  return (
    <section className='g-container mb'>
      <SectionTitle title={data.section_title} />
    </section>
  )
}

export default MostReaded
