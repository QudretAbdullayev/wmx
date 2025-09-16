import Square from "@/assets/icons/Square";
import styles from "./ComponentTitle.module.scss";

const ComponentTitle = ({ title }) => {
  return (
    <h3 className={`${styles.title} mb`}>
      <Square />
      ({title})
    </h3>
  );
};

export default ComponentTitle;
