'use client';

import { useState } from 'react';
import styles from './LetsTalk.module.scss';
import SafeImage from '@/components/SafeImage/SafeImage';

export default function LetsTalk({ effect }) {
  const [animating, setAnimating] = useState(false);

  function getRandomCharacter() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function shuffleAnimation() {
    if (animating) return;

    setAnimating(true);

    const words = document.querySelectorAll(`.${styles.item__word}`);
    const originalWords = Array.from(words).map((word) => word.textContent);

    let shuffles = 0;
    const maxShuffles = 10;
    const intervalDuration = 500 / maxShuffles;

    const animationInterval = setInterval(() => {
      if (shuffles >= maxShuffles) {
        clearInterval(animationInterval);
        words.forEach((word, index) => {
          word.textContent = originalWords[index];
        });
        setAnimating(false);
      } else {
        words.forEach((word) => {
          const length = word.textContent?.length || 0;
          let shuffledText = '';
          for (let i = 0; i < length; i++) {
            shuffledText += getRandomCharacter();
          }
          word.textContent = shuffledText;
        });
        shuffles++;
      }
    }, intervalDuration);
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.item}
          onMouseEnter={shuffleAnimation}
        >
          <div className={`${styles.item__word} ${styles.item__word1}`}>{effect.text_left}</div>
          <div className={styles.item__image}>
            <SafeImage
              src={effect.image}
              alt={`${effect.text_left}${" "}${effect.text_right}`}
              fill
            />
          </div>
          <div className={`${styles.item__word} ${styles.item__word2}`}>{effect.text_right}</div>
        </div>
      </div>
    </>
  );
}