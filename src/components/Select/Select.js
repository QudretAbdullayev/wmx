"use client";

import ArrowDown from "@/assets/icons/ArrowDown";
import styles from "./Select.module.scss";
import { useState, useRef, useEffect } from "react";

export default function Select({options, onSelectionChange, error, placeholder}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const selectRef = useRef(null);

  const closeDropdown = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        if (open && !isClosing) {
          closeDropdown();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, isClosing]);

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <div
        className={`${styles.container} ${error ? styles.error : ""}`}
        onClick={() => {
          if (open && !isClosing) {
            closeDropdown();
          } else if (!open && !isClosing) {
            setOpen(true);
          }
        }}
      >
        <span
          className={`${styles.placeholder} ${
            selected ? styles.selected : ""
          }`}
        >
          {selected ? selected.subject : placeholder}
        </span>
        <span className={`${styles.arrow} ${(open && !isClosing) ? styles.open : ""}`}>
          <ArrowDown/>
        </span>
      </div>

      {(open || isClosing) && (
        <ul className={`${styles.dropdown} ${isClosing ? styles.closing : ''}`}>
          {options.map((option) => (
            <li
              key={option.id}
              className={`${styles.option} ${
                selected?.id === option.id ? styles.active : ""
              }`}
              onClick={() => {
                setSelected(option);
                if (onSelectionChange) {
                  onSelectionChange(option.id);
                }
                closeDropdown();
              }}
            >
              {option.subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}