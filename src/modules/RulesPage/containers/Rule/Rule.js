import styles from './Rule.module.scss'

const Rule = () => {
  return (
    <section className={styles.rule}>
      <div className={styles.rule__title}>
        <h2>Privacy Policy</h2>
        <h2>Terms & Conditions</h2>
      </div>
      <p className={styles.rule__content}></p>
    </section>
  )
}

export default Rule
