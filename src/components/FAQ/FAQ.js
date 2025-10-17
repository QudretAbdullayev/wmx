import React, { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.scss';
import Minus from '@/assets/icons/Minus';
import Plus from '@/assets/icons/Plus';

const FAQ = ({data}) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [heights, setHeights] = useState({});
  const answerRefs = useRef({});

  useEffect(() => {
    const newHeights = {};
    Object.keys(answerRefs.current).forEach(key => {
      if (answerRefs.current[key]) {
        newHeights[key] = answerRefs.current[key].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [data]);

  const toggleItem = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.faq__list}>
        {data.map((item, index) => {
          const isExpanded = expandedItems.has(index);
          return (
            <div key={index} className={styles.item} onClick={() => toggleItem(index)}>
              <div className={styles.item__question}>
                <h5
                  className={`${styles.item__question__title} ${isExpanded ? styles.expanded : ''}`}
                >
                  {item.question}
                </h5>

                <div 
                  className={styles.item__answer__wrapper}
                  style={{
                    maxHeight: isExpanded ? `${heights[index]}px` : '0px',
                  }}
                >
                  <p 
                    ref={el => answerRefs.current[index] = el}
                    className={styles.item__answer}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>

              <button
                className={styles.item__button}
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minus /> : <Plus />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;