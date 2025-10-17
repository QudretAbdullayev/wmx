import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './FAQ.module.scss'
import FAQComponent from '@/components/FAQ/FAQ'

const FAQ = ({data, title}) => {
  console.log(data)
  return (
    <section className='g-container'>
        <SectionTitle title={title} />
        <div className="ml">
            <FAQComponent data={data}/>
        </div>
    </section>
  )
}

export default FAQ;
