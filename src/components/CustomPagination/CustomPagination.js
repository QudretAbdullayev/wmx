"use client"

import React from 'react';
import styles from './CustomPagination.module.scss';

const CustomPagination = ({ 
  totalSlides, 
  activeSlide, 
  onSlideChange
}) => {

  const handlePaginationClick = (index) => {
    onSlideChange(index);
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`${styles.frame} ${activeSlide === index ? styles.activeFrame : styles.inactiveFrame}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomPagination;
