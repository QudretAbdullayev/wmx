import styles from "./Founder.module.scss";
import SafeImage from "../SafeImage/SafeImage";
import Copy from "../Copy/Copy";

const Founder = ({ image, name, position, size }) => {
  return (
    <Copy variant="reveal">
    <div className={styles.founder}>
      <div className={`${styles.founder__image} ${styles[size]}`}>
        <SafeImage src={image} alt={name} fill/>
      </div>
      <div className={styles.founder__info}>
        <span className={styles.founder__info__name}>
          {name}
          {" - "}
        </span>
        <span className={styles.founder__info__position}>{position}</span>
      </div>
    </div>
    </Copy>
  );
};

export default Founder;
