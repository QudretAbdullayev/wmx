import ComponentTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './TellUs.module.scss'
import ContactForm from '@/components/ContactForm/ContactForm'

const TellUs = () => {
  return (
    <div className='g-container mb'>
        <ComponentTitle title="Tell us what you think" />
        <div className="ml">
            <ContactForm />
        </div>
    </div>
  )
}

export default TellUs;
