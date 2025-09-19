"use client"

import { useEffect, useRef } from 'react';
import styles from './CustomPagination.module.scss';

const CustomPagination = ({ 
  totalSlides, 
  activeSlide, 
  onSlideChange, 
  videoDurations = [],
  currentVideoTime = 0,
  isPlaying = false 
}) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current && videoDurations[activeSlide] && isPlaying) {
      const progress = (currentVideoTime / videoDurations[activeSlide]) * 100;
      progressRef.current.style.width = `${Math.min(progress, 100)}%`;
    }
  }, [currentVideoTime, videoDurations, activeSlide, isPlaying]);

  const handlePaginationClick = (index) => {
    onSlideChange(index);
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {/* First frame - Brand color */}
        <div 
          className={`${styles.frame} ${styles.brandFrame} ${activeSlide === 0 ? styles.active : ''}`}
          onClick={() => handlePaginationClick(0)}
        >
          <div 
            ref={progressRef}
            className={styles.progress}
            style={{ width: activeSlide === 0 && isPlaying ? '0%' : '100%' }}
          />
        </div>
        
        {/* Remaining frames */}
        {Array.from({ length: totalSlides - 1 }, (_, index) => (
          <div
            key={index + 1}
            className={`${styles.frame} ${styles.lightFrame} ${activeSlide === index + 1 ? styles.active : ''}`}
            onClick={() => handlePaginationClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomPagination;
