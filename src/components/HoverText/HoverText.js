import React from "react";
import styles from "./HoverText.module.scss";

const HoverText = ({ 
  text, 
  className = "", 
  as: Component = "div",
  href,
  ...props 
}) => {
  return (
    <Component 
      className={`${styles.hoverText} ${className}`}
      href={href}
      {...props}
    >
      <div className={styles.animation}>
        <span className={styles.animation__text}>{text}</span>
        <span className={styles.animation__hover}>{text}</span>
      </div>
    </Component>
  );
};

export default HoverText;