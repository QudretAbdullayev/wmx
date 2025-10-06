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
    <div className={styles.container}>
      <div className={styles.pagination}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`${styles.pagination__frame} ${activeSlide === index ? styles.pagination__active : styles.pagination__inactive}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomPagination;
