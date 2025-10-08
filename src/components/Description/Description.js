import styles from "./Description.module.scss";
import Effect from "../Effect/Effect";

const Description = ({
  title,
  description,
  classNameTitle,
  classNameDescription,
}) => {
  return (
    <div className={styles.container}>
      <Effect>
        <h4
          className={`${classNameTitle} ${styles.title}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Effect>
      <Effect>
        <p
          className={`${classNameDescription} ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Effect>
    </div>
  );
};

export default Description;
