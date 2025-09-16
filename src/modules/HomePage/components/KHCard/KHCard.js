import styles from "./KHCard.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

export default function KHCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <SafeImage
          src="/images/khcard-1.png"
          alt="branding"
          fill
        />
      </div>
      <div className={styles.card__date}>May 12, 2025</div>

      <div className={styles.card__content}>
        <h3 className={styles.card__content__title}>
          Branding Fundamentals: Core Concepts Every Mark.
        </h3>
        <p className={styles.card__content__desc}>
          Mark is a former adjunct Professor of Marketing at Melbourne Business
          School. He has a.
        </p>
      </div>
    </div>
  );
}
