import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './ContactForm.module.scss'

const ContactForm = ({data}) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className="ml">
      
      </div>
    </section>
  )
}

export default ContactForm;
