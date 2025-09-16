import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import Minus from '@/assets/icons/Minus';
import Plus from '@/assets/icons/Plus';

const FAQ = ({faqData}) => {
  const [expandedItems, setExpandedItems] = useState(new Set([0]));

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
        {faqData.map((item, index) => {
          const isExpanded = expandedItems.has(index);
          return (
            <div key={index} className={styles.item} onClick={() => toggleItem(index)}>
              <div className={styles.item__question}>
                <h5
                  className={`${styles.item__question__title} ${isExpanded ? styles.expanded : ''}`}
                >
                  {item.question}
                </h5>

                {isExpanded && (
                  <p className={styles.item__answer}>
                    {item.answer}
                  </p>
                )}
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