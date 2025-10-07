import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./ProgramCard.module.scss";
import LinkArrow from "@/assets/icons/LinkArrow";
import SafeLink from "@/components/SafeLink/SafeLink";
import Lock from "@/assets/icons/Lock";

const ProgramCard = ({ data }) => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.card__background}>
        {data.background_image && (
          <SafeImage src={data.background_image} alt="Background" fill />
        )}
      </div>
      <div
        className={`${styles.card__container} ${
          data.lock ? styles.card__lock : ""
        }`}
      >
        <div className={styles.card__detail}>
          {!data.lock && data.icon && (
            <div className={styles.card__small}>
              <img src={data.icon} alt="icon" />
            </div>
          )}
          {data.lock && <div className={styles.card__coming}>Coming Soon</div>}
          <div className={`${styles.program} ${styles.program_lock}`}>
            <span
              className={`${styles.program__title} ${
                data.lock ? styles.program__program_title : ""
              }`}
            >
              {data.title}
            </span>
            {data.lock ? (
              <SafeLink
                href={`/programs/${data.slug}`}
                className={styles.program__lock_icon}
              >
                <Lock />
              </SafeLink>
            ) : (
              <SafeLink
                href={`/programs/${data.slug}`}
                className={styles.program__icon}
              >
                <LinkArrow />
              </SafeLink>
            )}
          </div>
          <div className={styles.content}>
            <h3
              className={`${styles.content__title} ${
                data.lock ? styles.content__lock_title : ""
              }`}
            >
              {data.subtitle}
            </h3>
            <p
              className={`${styles.content__desc} ${
                data.lock ? styles.content__lock_desc : ""
              }`}
            >
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
