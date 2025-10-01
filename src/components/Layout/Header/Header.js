"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";
import SafeImage from "@/components/SafeImage/SafeImage";
import ArrowDown from "@/assets/icons/ArrowDown";
import HeaderSelectVector from "@/assets/icons/HeaderSelectVector";
import HoverText from "@/components/HoverText/HoverText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Feed" },
  { path: "/program", label: "Program" },
  { path: "/about", label: "About" },
  { path: "/knowledge-hub", label: "Knowledge Hub" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(`.${styles.overlay__link__holder}`, { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(`.${styles.overlay}`, {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(`.${styles.overlay__link__holder}`, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

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
    <header className={styles.header} ref={container}>
      <nav className={`${styles.nav} g-container`}>
        <div className={styles.nav__left}>
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
              href="/knowledge-hub"
              className={styles.nav__item}
            />
            <HoverText
              text="CONTACT"
              as="a"
              href="/contact"
              className={styles.nav__item}
            />
          </div>
          <button
            className={`${styles.nav__menu} ${
              isMenuOpen ? styles.nav__menu_active : ""
            }`}
            onClick={toggleMenu}
          >
            <span className={styles.nav__menu__text}>Menu</span>
            <span className={styles.nav__menu__click}>Close</span>
          </button>
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
      <div className={styles.overlay}>
          <div className={styles.overlay__links}>
            {menuLinks.map((link, index) => (
              <div key={index} className={styles.overlay__link}>
                <div className={styles.overlay__link__holder} onClick={toggleMenu}>
                  <SafeLink className={styles.menuLink} href={link.path}>
                    {link.label}
                  </SafeLink>
                </div>
              </div>
            ))}
          </div>
      </div>
    </header>
  );
}
