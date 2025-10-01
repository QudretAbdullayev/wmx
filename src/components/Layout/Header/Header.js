"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";
import SafeImage from "@/components/SafeImage/SafeImage";
import ArrowDown from "@/assets/icons/ArrowDownMenu";
import HeaderSelectVector from "@/assets/icons/HeaderSelectVector";
import HoverText from "@/components/HoverText/HoverText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const headerData = {
  logo: {
    src: "/icons/WM xSchool.svg",
    alt: "WM xSchool",
    href: "/",
  },
  navigation: {
    main_menu: [
      {
        path: "/",
        label: "FEED",
        type: "link",
      },
      {
        path: "/program",
        label: "PROGRAM",
        type: "dropdown",
        dropdown_items: [
          {
            label: "Emerging CMO",
            href: "/program/emerging-cmo",
          },
          {
            label: "Marketing PRO",
            href: "/program/marketing-pro",
          },
        ],
      },
      {
        path: "/about",
        label: "ABOUT",
        type: "link",
      },
      {
        path: "/knowledge-hub",
        label: "KNOWLEDGE HUB",
        type: "link",
      },
      {
        path: "/contact",
        label: "CONTACT",
        type: "link",
      },
    ],
    cta_button: {
      label: "Consultation",
      href: "/consultation",
    },
    mobile_menu: {
      open_text: "Menu",
      close_text: "Close",
      overlay_links: [
        {
          path: "/",
          label: "FEED",
          type: "link",
        },
        {
          path: "/program",
          label: "PROGRAM",
          type: "dropdown",
          dropdown_items: [
            {
              label: "Emerging CMO",
              href: "/program/emerging-cmo",
            },
            {
              label: "Marketing PRO",
              href: "/program/marketing-pro",
            },
          ],
        },
        {
          path: "/about",
          label: "ABOUT",
          type: "link",
        },
        {
          path: "/knowledge-hub",
          label: "KNOWLEDGE HUB",
          type: "link",
        },
        {
          path: "/contact",
          label: "CONTACT",
          type: "link",
        },
      ],
    },
  },
  icons: {
    arrow_down: ArrowDown,
    dropdown_vector: HeaderSelectVector,
  },
  animations: {
    menu_duration: 1,
    menu_ease: "power4.inOut",
    stagger_delay: 0.1,
    link_offset: 75,
    dropdown_duration: 0.4,
    dropdown_ease: "power2.out",
    arrow_duration: 0.3,
    arrow_ease: "power2.inOut",
  },
};

export default function Header() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();
  const dropdownTl = useRef();
  const mobileDropdownTls = useRef({});
  const navArrowRefs = useRef({});
  const mobileArrowRefs = useRef({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(`.${styles.overlay__link__holder}`, {
        y: headerData.animations.link_offset,
      });
      tl.current = gsap
        .timeline({ paused: true })
        .to(`.${styles.overlay}`, {
          duration: headerData.animations.menu_duration,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: headerData.animations.menu_ease,
        })
        .to(`.${styles.overlay__link__holder}`, {
          y: 0,
          duration: headerData.animations.menu_duration,
          stagger: headerData.animations.stagger_delay,
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
  const [mobileDropdownStates, setMobileDropdownStates] = useState({});
  const dropdownRef = useRef(null);

  const handleProgramClick = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

    // Ana dropdown animasyonu için GSAP setup
  useGSAP(() => {
    // Ana dropdown elements
    const dropdownItems = `.${styles.nav__select}`;
    const arrow = `.${styles.nav__arrow}`;
    
    // Initial state - CSS transition'ları devre dışı bırak
    gsap.set(dropdownItems, { 
      height: 0, 
      opacity: 0, 
      overflow: "hidden",
      transition: "none",
      visibility: "visible"
    });
    gsap.set(arrow, { rotation: 180, transformOrigin: "center center" });
    
    // Dropdown'ın gerçek yüksekliğini hesapla
    const getDropdownHeight = () => {
      const element = document.querySelector(dropdownItems);
      if (element) {
        gsap.set(element, { height: "auto", visibility: "hidden" });
        const height = element.offsetHeight;
        gsap.set(element, { height: 0, visibility: "visible" });
        return height;
      }
      return 0;
    };
    
    // Create timeline
    dropdownTl.current = gsap.timeline({ paused: true })
      .to(arrow, {
        rotation: 0,
        duration: headerData.animations.arrow_duration,
        ease: headerData.animations.arrow_ease
      })
      .to(dropdownItems, {
        height: () => getDropdownHeight(),
        opacity: 1,
        duration: headerData.animations.dropdown_duration,
        ease: headerData.animations.dropdown_ease
      }, "-=0.1");
  }, { scope: container });

  useEffect(() => {
    if (dropdownTl.current) {
      if (isProgramDropdownOpen) {
        dropdownTl.current.play();
      } else {
        dropdownTl.current.reverse();
      }
    }
  }, [isProgramDropdownOpen]);

  const handleMobileDropdownClick = (index) => {
    setMobileDropdownStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Mobil dropdown animasyonu - GSAP ile setup
  useGSAP(() => {
    // Her mobil dropdown için timeline oluştur
    headerData.navigation.mobile_menu.overlay_links.forEach((link, index) => {
      if (link.type === "dropdown") {
        const dropdownSelector = `[data-mobile-dropdown="${index}"]`;
        const arrowSelector = `[data-mobile-arrow="${index}"]`;
        
        // Initial state - CSS transition'ları devre dışı bırak
        gsap.set(dropdownSelector, { 
          height: 0, 
          opacity: 0, 
          overflow: "hidden",
          transition: "none",
          visibility: "visible"
        });
        gsap.set(arrowSelector, { rotation: 180, transformOrigin: "center center" });
        
        // Mobile dropdown'ın gerçek yüksekliğini hesapla
        const getMobileDropdownHeight = () => {
          const element = document.querySelector(dropdownSelector);
          if (element) {
            gsap.set(element, { height: "auto", visibility: "hidden" });
            const height = element.offsetHeight;
            gsap.set(element, { height: 0, visibility: "visible" });
            return height;
          }
          return 0;
        };
        
        // Create timeline
        mobileDropdownTls.current[index] = gsap.timeline({ paused: true })
          .to(arrowSelector, {
            rotation: 0,
            duration: headerData.animations.arrow_duration,
            ease: headerData.animations.arrow_ease
          })
          .to(dropdownSelector, {
            height: () => getMobileDropdownHeight(),
            opacity: 1,
            duration: headerData.animations.dropdown_duration,
            ease: headerData.animations.dropdown_ease
          }, "-=0.1");
      }
    });
  }, { scope: container });

  // Mobil dropdown animasyon kontrol fonksiyonu
  const animateMobileDropdown = (index, isOpen) => {
    if (mobileDropdownTls.current[index]) {
      if (isOpen) {
        mobileDropdownTls.current[index].play();
      } else {
        mobileDropdownTls.current[index].reverse();
      }
    }
  };

  // Mobil dropdown state değişimi
  useEffect(() => {
    Object.keys(mobileDropdownStates).forEach(index => {
      animateMobileDropdown(parseInt(index), mobileDropdownStates[index]);
    });
  }, [mobileDropdownStates]);

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
            {headerData.navigation.main_menu.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div
                    key={index}
                    ref={dropdownRef}
                    className={`${styles.nav__item} ${
                      isProgramDropdownOpen ? styles.nav__dropdown : ""
                    }`}
                    onClick={handleProgramClick}
                  >
                    <HoverText
                      text={
                        <div className={styles.nav__item__dropdown}>
                          {item.label}
                          <headerData.icons.arrow_down
                            className={`${styles.nav__arrow} ${
                              isProgramDropdownOpen
                                ? styles.nav__arrow_open
                                : ""
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
                          <headerData.icons.dropdown_vector />
                        </div>
                        {item.dropdown_items.map(
                          (dropdownItem, dropdownIndex) => (
                            <HoverText
                              key={dropdownIndex}
                              text={dropdownItem.label}
                              as="a"
                              href={dropdownItem.href}
                              className={styles.box__subitem}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <HoverText
                    key={index}
                    text={item.label}
                    as="a"
                    href={item.path}
                    className={styles.nav__item}
                  />
                );
              }
            })}
          </div>
          <button
            className={`${styles.nav__menu} ${
              isMenuOpen ? styles.nav__menu_active : ""
            }`}
            onClick={toggleMenu}
          >
            <span className={styles.nav__menu__text}>
              {headerData.navigation.mobile_menu.open_text}
            </span>
            <span className={styles.nav__menu__click}>
              {headerData.navigation.mobile_menu.close_text}
            </span>
          </button>
          <SafeLink className={styles.nav__logo} href={headerData.logo.href}>
            <SafeImage
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              fill
            />
          </SafeLink>
        </div>

        <HoverText
          text={headerData.navigation.cta_button.label}
          as="a"
          href={headerData.navigation.cta_button.href}
          className={styles.nav__cta}
        />
      </nav>
      <div className={styles.overlay}>
        <div className={styles.overlay__links}>
          {headerData.navigation.mobile_menu.overlay_links.map(
            (link, index) => {
              if (link.type === "dropdown") {
                return (
                  <div key={index} className={styles.overlay__link}>
                    <div className={styles.overlay__link__holder}>
                      <div
                        className={styles.overlay__link__name}
                        onClick={() => handleMobileDropdownClick(index)}
                      >
                        {link.label}
                        <ArrowDown
                          data-mobile-arrow={index}
                          className={`${styles.overlay__arrow} ${
                            mobileDropdownStates[index]
                              ? styles.overlay__arrow_open
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        data-mobile-dropdown={index}
                        className={`${styles.overlay__link__dropdown} ${
                          mobileDropdownStates[index]
                            ? styles.overlay__link__open
                            : ""
                        }`}
                      >
                        {link.dropdown_items.map(
                          (dropdownItem, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              className={styles.overlay__link__open__item}
                            >
                              <SafeLink
                                className={styles.overlay__link__open__link}
                                href={dropdownItem.href}
                                onClick={toggleMenu}
                              >
                                {dropdownItem.label}
                              </SafeLink>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className={styles.overlay__link}>
                    <div
                      className={styles.overlay__link__holder}
                      onClick={toggleMenu}
                    >
                      <SafeLink className={styles.overlay__link__name} href={link.path}>
                        {link.label}
                      </SafeLink>
                    </div>
                  </div>
                );
              }
            }
          )}
        </div>
      </div>
    </header>
  );
}
