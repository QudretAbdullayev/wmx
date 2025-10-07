import styles from "./Description.module.scss";
import Copy from "../Copy/Copy";

const Description = ({
  title,
  description,
  classNameTitle,
  classNameDescription,
}) => {
  return (
    <div className={styles.container}>
      <Copy>
        <h4
          className={`${classNameTitle} ${styles.title}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Copy>
      <Copy>
        <p
          className={`${classNameDescription} ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Copy>
    </div>
  );
};

export default Description;
