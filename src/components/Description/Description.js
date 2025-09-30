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
        data-aos="fade-up"
        data-aos-duration={200}
        data-aos-easing="ease"
      />
      <p
        className={`${classNameDescription} ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
        data-aos="fade-up"
        data-aos-duration={200}
        data-aos-easing="ease"
      />
    </div>
  );
};

export default Description;
