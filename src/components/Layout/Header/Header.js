// File: components/Header.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";
import SafeImage from "@/components/SafeImage/SafeImage";
import ArrowDown from "@/assets/icons/ArrowDown";
import HeaderSelectVector from "@/assets/icons/HeaderSelectVector";
import HoverText from "@/components/HoverText/HoverText";

export default function Header() {
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProgramClick = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProgramDropdownOpen(false);
      }
    };

    if (isProgramDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProgramDropdownOpen]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} g-container`}>
        <div className={styles.nav__menu}>
          <div className={styles.nav__items}>
            <HoverText
              text="FEED"
              as="a"
              href="/"
              className={styles.nav__item}
            />
            <div
              ref={dropdownRef}
              className={`${styles.nav__item} ${
                isProgramDropdownOpen ? styles.nav__dropdown : ""
              }`}
              onClick={handleProgramClick}
            >
              <HoverText
                text={
                  <div className={styles.nav__item__dropdown}>
                    PROGRAM
                    <ArrowDown
                      className={`${styles.nav__arrow} ${
                        isProgramDropdownOpen ? styles.nav__arrow_open : ""
                      }`}
                    />
                  </div>
                }
              />
              <div
                className={`${styles.nav__select} ${
                  isProgramDropdownOpen ? styles.nav__select_open : ""
                }`}
              >
                <div className={styles.box}>
                  <div className={styles.box__vector}>
                    <HeaderSelectVector />
                  </div>
                  <HoverText
                    text="Emerging CMO"
                    as="a"
                    href="/program/emerging-cmo"
                    className={styles.box__subitem}
                  />
                  <HoverText
                    text="Marketing PRO"
                    as="a"
                    href="/program/marketing-pro"
                    className={styles.box__subitem}
                  />
                </div>
              </div>
            </div>
            <HoverText
              text="ABOUT"
              as="a"
              href="/about"
              className={styles.nav__item}
            />
            <HoverText
              text="KNOWLEDGE HUB"
              as="a"
              href="/knowledge"
              className={styles.nav__item}
            />
            <HoverText
              text="CONTACT"
              as="a"
              href="/contact"
              className={styles.nav__item}
            />
          </div>
          <SafeLink className={styles.nav__logo} href="/">
            <SafeImage src="/icons/WM xSchool.svg" alt="WM xSchool" fill />
          </SafeLink>
        </div>

        <HoverText
          text="Consultation"
          as="a"
          href="/consultation"
          className={styles.nav__cta}
        />
      </nav>
    </header>
  );
}
