import styles from "./EffectCard.module.scss";
import SafeImage from "../SafeImage/SafeImage";

const EffectCard = ({ backColor, bigIcon, smallIcon, image, founder }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: backColor }}>
      {bigIcon && (
        <div className={styles.card__effect}>
          <SafeImage src={bigIcon} alt="Big Icon" fill />
        </div>
      )}
      <div className={styles.card__container}>
        <div className={styles.card__image}>
          <SafeImage src={image} alt={founder} fill />
        </div>
      </div>
    </div>
  );
};

export default EffectCard;
