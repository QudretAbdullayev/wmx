import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./EffectCard.module.scss";

const EffectCard = ({ background_image, front_image, front_title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__effect}>
        <SafeImage src={background_image} alt="Background" fill />
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__image}>
          <SafeImage src={front_image} alt={front_title} fill />
        </div>
      </div>
    </div>
  );
};

export default EffectCard;
