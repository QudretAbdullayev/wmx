'use client';

import { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './LetsTalk.module.scss';
import SafeImage from '@/components/SafeImage/SafeImage';

const LetsTalk = forwardRef(function LetsTalk({ left, right, banner }, ref) {
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function getRandomCharacter() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function shuffleAnimation() {
    if (animating) return;

    if (window.innerWidth <= 700) return;

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

  useImperativeHandle(ref, () => ({
    triggerShuffle: shuffleAnimation,
    setHover: setIsHovered
  }));

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.item} ${isHovered ? styles.item_hovered : ''}`}
        >
          <div className={`${styles.item__word} ${styles.item__word1}`}>{left}</div>
          <div className={styles.item__image}>
            <SafeImage
              src={banner}
              alt={`${left}${" "}${right}`}
              fill
            />
          </div>
          <div className={`${styles.item__word} ${styles.item__word2}`}>{right}</div>
        </div>
      </div>
    </>
  );
});

export default LetsTalk;