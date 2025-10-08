import React from "react";
import styles from "./HoverText.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";

const HoverText = ({ 
  text, 
  className = "", 
  as: Component = "div",
  href,
  ...props 
}) => {
  const content = (
    <div className={styles.animation}>
      <span className={styles.animation__text}>{text}</span>
      <span className={styles.animation__hover}>{text}</span>
    </div>
  );

  if (href) {
    return (
      <SafeLink href={href} className={`${styles.hoverText} ${className}`} {...props}>
        {content}
      </SafeLink>
    );
  }

  return (
    <Component className={`${styles.hoverText} ${className}`} {...props}>
      {content}
    </Component>
  );
};

export default HoverText;