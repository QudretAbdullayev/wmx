import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './FAQ.module.scss'
import FAQComponent from '@/components/FAQ/FAQ'

const FAQ = ({data}) => {

  return (
    <section className='mb'>
        <SectionTitle title={data.section_title} />
        <div className="ml">
            <FAQComponent faqData={data.faqs}/>
        </div>
    </section>
  )
}

export default FAQ;
