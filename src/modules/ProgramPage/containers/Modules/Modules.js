"use client";

import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./Modules.module.scss";
import Plus from "@/assets/icons/Plus";
import Minus from "@/assets/icons/Minus";
import { useState } from "react";

const Modules = ({ data }) => {
  // Initialize expanded blocks based on data status
  const [expandedBlocks, setExpandedBlocks] = useState(() => {
    const initial = {};
    data.course_curriculum.forEach(course => {
      initial[course.id] = course.status === 'expanded';
    });
    return initial;
  });
  
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
              className={`${styles.modules__title} ${styles[course.titleColor]}`}
            >
              {course.section}
            </h2>

            {expandedBlocks[course.id] && course.modules.length > 0 && (
              <div className={styles.modulesContainer}>
                {course.modules.map((module, index) => (
                  <div key={index} className={styles.moduleItem}>
                    <span className={styles.moduleText}>{module.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;
