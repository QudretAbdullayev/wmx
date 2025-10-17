import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './ContactUs.module.scss'
import SafeImage from '@/components/SafeImage/SafeImage'

const ContactUs = ({ data }) => {

  return (
    <section className="g-container mb">
      <SectionTitle title={data.contact_info_section_title} />
      <div className="ml">
        <div className={styles.contact}>
          <div className={styles.contact__image}>
            <SafeImage src={data.image} alt={data.image} fill />
          </div>
          <div className={styles.contact__items}>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.address_title})</div>
              <div className={styles.contact__item__description}>{data.address}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.phone_title})</div>
              <div className={styles.contact__item__description}>{data.phone}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.contact_title})</div>
              <div className={styles.contact__item__description}>{data.contact}</div>
            </div>
            <div className={styles.contact__item}>
              <div className={styles.contact__item__title}>({data.work_hours_title})</div>
              <div className={styles.contact__item__description}>{data.work_hours}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
