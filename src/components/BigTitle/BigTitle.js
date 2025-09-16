import styles from './BigTitle.module.scss'

const BigTitle = ({title}) => {
  return (
    <div className={`${styles.title} mb`}>
      <span className={styles.title__star}>{"*     "}</span>
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}

export default BigTitle
