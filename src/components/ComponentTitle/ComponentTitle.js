import styles from "./ComponentTitle.module.scss";

const ComponentTitle = ({ title }) => {
  return (
    <div
      className={`${styles.title} mb`}
      data-aos="fade-up"
      data-aos-duration={200}
      data-aos-easing="ease"
    >
      <span className={styles.title__star}>{"*     "}</span>
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default ComponentTitle;
