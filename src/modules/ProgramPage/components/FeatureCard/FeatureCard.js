import Circle from '@/assets/icons/Circle'
import styles from './FeatureCard.module.scss'

const FeatureCard = ({ title, description, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <Circle color={color} />
      </div>
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__description}>{description}</p>
    </div>
  )
}

export default FeatureCard
