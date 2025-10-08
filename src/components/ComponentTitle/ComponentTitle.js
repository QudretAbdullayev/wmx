import styles from "./ComponentTitle.module.scss";
import Effect from "../Effect/Effect";

const ComponentTitle = ({ title }) => {
  return (
    <Effect>
      <div
        className={`${styles.title} mb`}
      >
        <span className={styles.title__star}>{"*     "}</span>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </Effect>
  );
};

export default ComponentTitle;
