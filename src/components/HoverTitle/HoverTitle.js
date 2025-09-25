"use client";
import { useState, useRef } from "react";
import SafeImage from "../SafeImage/SafeImage";
import styles from "./HoverTitle.module.scss";

const HoverTitle = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className={styles.hover}>
      <h1
        ref={titleRef}
        className={styles.hover__title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {title}
      </h1>
      {image && (
        <div
          className={`${styles.hover__container} ${
            isHovered ? styles.hover__container_visible : ""
          }`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            position: "fixed",
          }}
        >
          <div className={styles.hover__image}>
            <SafeImage src={image} alt="articles hover" fill />
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverTitle;
