import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './ContactUs.module.scss'

const ContactUs = ({data}) => {
  return (
    <section>
      <SectionTitle title={data.section_title} />
    </section>
  )
}

export default ContactUs
