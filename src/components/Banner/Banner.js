import styles from './Banner.module.scss'
import SafeImage from '../SafeImage/SafeImage'
import Mouse from '../Mouse/Mouse'

const Banner = ({src}) => {
  return (
    <div className={styles.banner}>
        <SafeImage src={src} alt="banner" fill/>
        <Mouse text="UH.HUH"/>
    </div>
  )
}

export default Banner