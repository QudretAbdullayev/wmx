"use client";
import { useEffect, useRef, useMemo, useCallback } from "react";
import styles from "./ScrollAnimation.module.scss";
import Banner from "../Banner/Banner";
import VideoStatic from "../VideoStatic/VideoStatic";

const ScrollAnimation = ({ data }) => {
  const videoContainerRef = useRef(null);
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const savedTimeRef = useRef(0);
  const playPromiseRef = useRef(null);
  const isMouseInHeroRef = useRef(false);

  const handleVideoEnded = useCallback(async () => {
    savedTimeRef.current = 0;
    if (videoRef.current) {
      videoRef.current.seekTo(0);
      
      // Eğer mouse hala hero alanındaysa videoyu tekrar başlat
      if (isMouseInHeroRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error('Video restart error:', error);
        }
      }
    }
  }, []);

  const memoizedVideoStatic = useMemo(
    () => (
      <VideoStatic
        ref={videoRef}
        src="/videos/videoplayback.mp4"
        loop={false}
        autoPlay={false}
        isActive={true}
        onEnded={handleVideoEnded}
      />
    ),
    [handleVideoEnded]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let currentMouseX = 0;
    let targetMouseX = 0;
    let currentOpacity = 0;
    let targetOpacity = 0;

    const handleMouseMove = (e) => {
      if (isMouseInHeroRef.current) {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 800;
      }
    };

    const handleMouseEnter = async () => {
      isMouseInHeroRef.current = true;
      targetOpacity = 1;

      if (playPromiseRef.current) {
        try {
          await playPromiseRef.current;
        } catch (error) {}
      }

      if (videoRef.current) {
        videoRef.current.seekTo(savedTimeRef.current);
        playPromiseRef.current = videoRef.current.play().catch(error => {
          console.error('Video play error:', error);
        });
      }
    };

    const handleMouseLeave = async () => {
      isMouseInHeroRef.current = false;
      targetOpacity = 0;
      targetMouseX = 0;

      if (playPromiseRef.current) {
        try {
          await playPromiseRef.current;
        } catch (error) {}
        playPromiseRef.current = null;
      }

      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime || 0;
        savedTimeRef.current = currentTime;
        await videoRef.current.pause();
      }
    };

    const checkInitialHover = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          isMouseInHeroRef.current = true;
          targetMouseX = (e.clientX / window.innerWidth - 0.5) * 800;
          handleMouseEnter();
        }
      }
    };

    const animate = () => {
      currentMouseX += (targetMouseX - currentMouseX) * 0.1;
      currentOpacity += (targetOpacity - currentOpacity) * 0.08;

      if (videoContainerRef.current) {
        videoContainerRef.current.style.transform = `translateX(calc(-50% + ${currentMouseX}px))`;
        videoContainerRef.current.style.opacity = currentOpacity;
      }

      requestAnimationFrame(animate);
    };

    if (heroRef.current) {
      heroRef.current.addEventListener("mouseenter", handleMouseEnter);
      heroRef.current.addEventListener("mouseleave", handleMouseLeave);
      heroRef.current.addEventListener("mousemove", handleMouseMove);
    }

    document.addEventListener('mousemove', checkInitialHover, { once: true });

    animate();

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener("mouseenter", handleMouseEnter);
        heroRef.current.removeEventListener("mouseleave", handleMouseLeave);
        heroRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      document.removeEventListener('mousemove', checkInitialHover);
    };
  }, [handleVideoEnded]);

  return (
    <section>
      <div className={styles.hero} ref={heroRef}>
        <div className="g-container">
          <h1 className={styles.hero__title}>{data.title}</h1>
          <div
            className={styles.hero__wrapper}
            ref={videoContainerRef}
          >
            <div className={styles.hero__video}>{memoizedVideoStatic}</div>
          </div>
        </div>
      </div>
      <div className={`g-container mb ${styles.container}`}>
        <Banner src={data.banner} />
      </div>
    </section>
  );
};

export default ScrollAnimation;