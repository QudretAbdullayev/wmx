import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './ContactForm.module.scss'

const ContactForm = ({data}) => {
  return (
    <section>
      <SectionTitle title={data.section_title} />
    </section>
  )
}

export default ContactForm;
