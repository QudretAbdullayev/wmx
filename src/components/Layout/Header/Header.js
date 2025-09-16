// File: components/Header.jsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import SafeLink from '@/components/SafeLink/SafeLink';
import SafeImage from '@/components/SafeImage/SafeImage';
import ArrowDown from '@/assets/icons/ArrowDown';
import HeaderSelectVector from '@/assets/icons/HeaderSelectVector';

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
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isProgramDropdownOpen]);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} g-container`}>
                <div className={styles.nav__menu}>
                    <div className={styles.nav__items}>
                        <SafeLink className={styles.nav__item} href="/">FEED</SafeLink>
                        <div 
                            ref={dropdownRef}
                            className={`${styles.nav__item} ${isProgramDropdownOpen ? styles.nav__dropdown : ""}`} 
                            onClick={handleProgramClick}
                        >
                            <span>PROGRAM</span>
                            <ArrowDown className={`${styles.nav__arrow} ${isProgramDropdownOpen ? styles.nav__arrow_open : ''}`} />
                            <div className={`${styles.nav__select} ${isProgramDropdownOpen ? styles.nav__select_open : ''}`}>
                                <div className={styles.box}>
                                    <div className={styles.box__vector}><HeaderSelectVector /></div>
                                    <SafeLink className={styles.box__subitem} href="/program/emerging-cmo">Emerging CMO</SafeLink>
                                    <SafeLink className={styles.box__subitem} href="/program/marketing-pro">Marketing PRO</SafeLink>
                                </div>
                            </div>
                        </div>
                        <SafeLink className={styles.nav__item} href="/about">ABOUT</SafeLink>
                        <SafeLink className={styles.nav__item} href="/knowledge">KNOWLEDGE HUB</SafeLink>
                        <SafeLink className={styles.nav__item} href="/contact">CONTACT</SafeLink>
                    </div>
                    <SafeLink className={styles.nav__logo} href="/">
                        <SafeImage src="/icons/WM xSchool.svg" alt="WM xSchool" fill />
                    </SafeLink>
                </div>

                <SafeLink className={styles.nav__cta} href="/consultation">Consultation</SafeLink>
            </nav>
        </header>
    );
}