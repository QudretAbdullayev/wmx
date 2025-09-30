"use client";

import React, { useEffect, useRef } from "react";
import styles from "./HomeBanner.module.scss";
import { gsap } from "gsap";
import { useScroll, useTransform, motion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";
import { useLocale } from "next-intl";
import useMediaQuery from "@/hooks/useMediaQuery";
import { throttle } from "@/utils/throttle";
import VideoStatic from "../VideoStatic/VideoStatic";

// --------------------------------------------------------
// 1) Small constants for "en" and "az" heading sections
// --------------------------------------------------------
const TitleEnglishDesktop = ({ titleVariants }) => (
  <div className={styles.banner__title__desk}>
    <div>
      <motion.p initial="hidden" animate="visible" custom={0.8} variants={titleVariants}>
        READY TO MARK
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.1} variants={titleVariants}>
        THE DIFFERENCE
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.4} variants={titleVariants}>
        IN MARKETECH
      </motion.p>
    </div>
  </div>
);

const TitleEnglishMobile = ({ titleVariants }) => (
  <div className={styles.banner__title__mob}>
    <div>
      <motion.p initial="hidden" animate="visible" custom={0.8} variants={titleVariants}>
        READY TO
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.1} variants={titleVariants}>
        MARK the
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.4} variants={titleVariants}>
        DIFFERENCE
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.7} variants={titleVariants}>
        IN MARKETECH
      </motion.p>
    </div>
  </div>
);

const TitleAzerbaijaniDesktop = ({ titleVariants }) => (
  <div className={styles.banner__title__desk}>
    <div>
      <motion.p initial="hidden" animate="visible" custom={0.8} variants={titleVariants}>
        MARKETECH-DƏ
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.1} variants={titleVariants}>
        FƏRQ YARATMAĞA
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.4} variants={titleVariants}>
        HAZIRIQ
      </motion.p>
    </div>
  </div>
);

const TitleAzerbaijaniMobile = ({ titleVariants }) => (
  <div className={styles.banner__title__mob}>
    <div>
      <motion.p initial="hidden" animate="visible" custom={0.8} variants={titleVariants}>
        MARKETECH-
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.1} variants={titleVariants}>
        DƏ FƏRQ
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.4} variants={titleVariants}>
        YARATMAĞA
      </motion.p>
    </div>
    <div>
      <motion.p initial="hidden" animate="visible" custom={1.7} variants={titleVariants}>
        HAZIRIQ
      </motion.p>
    </div>
  </div>
);

// --------------------------------------------------------
// 2) Sample Data (for testing/demo purposes)
// --------------------------------------------------------
const sampleData = {
  video_url: "/videos/thumbnail-reel-1.mp4",
  slo_description: "Welcome to xSchool - where innovation meets excellence in marketing education. Transform your career with our cutting-edge programs designed for tomorrow's leaders."
};

// --------------------------------------------------------
// 3) HomeBanner Component
// --------------------------------------------------------
const HomeBanner = ({ data = sampleData }) => {
  const locale = useLocale();

  // Custom hook for media query or window resize event
  const isLargeScreen = useMediaQuery(650);

  // Scroll-based transform using Framer Motion
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });
  const imgWidth = useTransform(scrollYProgress, [0, 1], [`${132 * 0.445}rem`, `${132}rem`]);

  // Video container references
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  // --------------------------------------------------------
  // 3) Mousemove effect (throttled)
  // --------------------------------------------------------
  useEffect(() => {
    if (!isLargeScreen || !wrapperRef.current || !imageRef.current) return;

    // Movement function
    const moveImage = throttle((e) => {
      const wrapperBounds = wrapperRef.current.getBoundingClientRect();
      const offsetW = imageRef.current.offsetWidth;
      const x = e.clientX + offsetW - wrapperBounds.width - 75;
      const xMax = Math.max(x, offsetW - wrapperBounds.width - 75);
      const xMin = Math.min(xMax, 0);

      gsap.to(imageRef.current, {
        x: `${xMin / 10}rem`,
        duration: 0.6,
        ease: "power1",
      });
    }, 20);

    // Attach event
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("mousemove", moveImage);

    // Cleanup
    return () => {
      wrapper.removeEventListener("mousemove", moveImage);
      moveImage.cancel?.(); // Call cancel() if our custom throttle implements it
    };
  }, [isLargeScreen]);

  // --------------------------------------------------------
  // 4) Scroll event (throttled)
  // --------------------------------------------------------
  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return;

    const handleScroll = throttle(() => {
      // If the screen is not large, do nothing
      if (!isLargeScreen) return;

      // If it's moved too far to the left, clamp x to the last limit
      const imageX = imageRef?.current?.getBoundingClientRect()?.x;
      if (imageX < 50) {
        const value = -(wrapperRef.current.offsetWidth - imageRef.current.offsetWidth) / 10;
        gsap.to(imageRef.current, {
          x: `${value}rem`,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, 150); // Slight delay for scroll events

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel?.();
    };
  }, [isLargeScreen]);

  // --------------------------------------------------------
  // 5) Animation variants for Framer Motion
  // --------------------------------------------------------
  const titleVariants = {
    hidden: { opacity: 0, y: 135 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom },
    }),
  };

  // --------------------------------------------------------
  // 6) Render
  // --------------------------------------------------------
  return (
    <section className={styles.banner}>
      <div className="g-container">
        <div className={styles.banner__wrapper} ref={wrapperRef}>
          <h1 className={styles.banner__title}>
            {locale === "en" ? (
              <>
                <TitleEnglishDesktop titleVariants={titleVariants} />
                <TitleEnglishMobile titleVariants={titleVariants} />
              </>
            ) : (
              <>
                <TitleAzerbaijaniDesktop titleVariants={titleVariants} />
                <TitleAzerbaijaniMobile titleVariants={titleVariants} />
              </>
            )}
          </h1>

          <div className={styles.banner__content} ref={containerRef}>
            {isLargeScreen !== null && (
              <motion.div
                className={styles.sticky}
                ref={imageRef}
                style={{ width: isLargeScreen ? imgWidth : "100vw" }}
              >
                <div className={styles.banner__video}>
                  <VideoStatic src={data.video_url} preload="auto" />
                </div>
              </motion.div>
            )}
          </div>

          <AnimatedText text={data.slo_description} />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;