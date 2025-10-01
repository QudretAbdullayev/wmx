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
        data-aos-duration={600}
        data-aos-easing="ease-in-quart"
      />
      <p
        className={`${classNameDescription} ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-easing="ease-in-quart"
      />
    </div>
  );
};

export default Description;
