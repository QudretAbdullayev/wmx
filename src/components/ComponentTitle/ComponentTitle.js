import styles from "./ComponentTitle.module.scss";
import Copy from "../Copy/Copy";

const ComponentTitle = ({ title }) => {
  return (
    <Copy>
      <div
        className={`${styles.title} mb`}
      >
        <span className={styles.title__star}>{"*     "}</span>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </Copy>
  );
};

export default ComponentTitle;
