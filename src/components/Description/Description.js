import styles from "./Description.module.scss";

const Description = ({
  title,
  description,
  classNameTitle,
  classNameDescription,
}) => {
  return (
    <div className={styles.container}>
      <h4
        className={`${classNameTitle} ${styles.title}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className={`${classNameDescription} ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Description;
