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
      <h1 className={styles.hover__title}>{title}</h1>
    </div>
  );
};

export default HoverTitle;
