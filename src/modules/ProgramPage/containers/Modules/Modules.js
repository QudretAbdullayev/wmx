"use client";

import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./Modules.module.scss";
import Plus from "@/assets/icons/Plus";
import Minus from "@/assets/icons/Minus";
import { useState, useRef, useEffect } from "react";

const Modules = ({ data }) => {
  const [expandedBlocks, setExpandedBlocks] = useState(() => {
    const initial = {};
    data.course_curriculum.forEach(course => {
      initial[course.id] = false;
    });
    return initial;
  });
  const [heights, setHeights] = useState({});
  const containerRefs = useRef({});

  useEffect(() => {
    const newHeights = {};
    Object.keys(containerRefs.current).forEach(key => {
      if (containerRefs.current[key]) {
        newHeights[key] = containerRefs.current[key].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [data]);
  
  const toggleBlock = (blockId) => {
    setExpandedBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className={`${styles.modules} ml`}>
        {data.course_curriculum.map((course) => (
          <div key={course.id} className={styles.modules__block}>
            <div className={styles.modules__header}>
              <div className={styles.modules__label}>
                {course.block_name}
              </div>
              <button 
                className={styles.modules__button}
                onClick={() => toggleBlock(course.id)}
              >
                {expandedBlocks[course.id] ? <Minus/> : <Plus/>}
              </button>
            </div>
            <h2
              className={styles.modules__title}
            >
              {course.section}
            </h2>

            {course.modules.length > 0 && (
              <div 
                className={styles.modules__container}
                style={{
                  maxHeight: expandedBlocks[course.id] ? `${heights[course.id] + 38}px` : '0px',
                }}
              >
                <div ref={el => containerRefs.current[course.id] = el} className={styles.modules__list}>
                  {course.modules.map((module, index) => (
                    <div key={index} className={styles.modules__item}>
                      <span className={styles.modules__text}>{module.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;
