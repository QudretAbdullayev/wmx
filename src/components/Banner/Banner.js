import styles from './Banner.module.scss'
import SafeImage from '../SafeImage/SafeImage'

const Banner = ({src}) => {
  return (
    <div className={styles.banner}>
        <SafeImage src={src} alt="banner" fill/>
    </div>
  )
}

export default Banner