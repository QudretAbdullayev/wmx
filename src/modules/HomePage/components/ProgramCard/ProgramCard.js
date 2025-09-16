import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./ProgramCard.module.scss";
import LinkArrow from "@/assets/icons/LinkArrow";

const ProgramCard = ({ backColor, bigIcon, smallIcon, image, founder }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: backColor }}>
      {bigIcon && (
        <div className={styles.card__effect}>
          <SafeImage src={bigIcon} alt="Big Icon" fill />
        </div>
      )}
      <div className={styles.card__container}>
        <div className={styles.card__detail}>
          {smallIcon && (
            <div className={styles.card__small}>
              <img src={smallIcon} alt="Small Icon" />
            </div>
          )}
          <div className={styles.program}>
            <span className={styles.program__title}>CMO</span>
            <div className={styles.program__icon}>
              <LinkArrow />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Subscribe</h3>
            <p className={styles.content__desc}>
              Stay ahead in education and tech — subscribe now and never miss an
              update.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
