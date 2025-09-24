import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './ContactUs.module.scss'
import SafeImage from '@/components/SafeImage/SafeImage'

const ContactUs = ({ data }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className="ml">
        <div className={styles.contact}>
          <div className={styles.contact__image}>
            <SafeImage src={data.image} alt={data.section_title} fill />
          </div>
          <div className={styles.contact__items}>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.address_name})</div>
              <div className={styles.contact__item__description}>{data.address_value}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.phone_name})</div>
              <div className={styles.contact__item__description}>{data.phone_value}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.contact_name})</div>
              <div className={styles.contact__item__description}>{data.contact_value}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.hours_name})</div>
              <div className={styles.contact__item__description}>{data.hours_value}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
