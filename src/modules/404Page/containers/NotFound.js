'use client';

import { useState, useEffect } from "react";
import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./NotFound.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";

const NotFound = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 5;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__bg}
      style={{
        background: `url(/images/404/image-${currentImageIndex + 1}.png) lightgray 50% / cover no-repeat`
      }}
      >
      </div>
      <div className={`${styles.notFound__text}`}>
        <div className={styles.notFound__code}>404</div>
      </div>
      <div className={styles.notFound__content}>
        <div className={styles.notFound__title}>Page Not Found</div>
        <p className={styles.notFound__description}>
          Dear user, it&apos;s all gone wrong. But don&apos;t fret. Check the URL, shake
          the tension from your shoulders, and clear your mind. Happiness awaits
        </p>
        <SafeLink href="/" className={styles.notFound__button}>Back Home</SafeLink>
      </div>
    </section>
  );
};

export default NotFound;
