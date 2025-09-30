"use client";
import { useEffect, useRef, useMemo } from "react";
import styles from "./ScrollAnimation.module.scss";
import Banner from "../Banner/Banner";
import VideoStatic from "../VideoStatic/VideoStatic";

const ScrollAnimation = ({ data }) => {
  const videoContainerRef = useRef(null);
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const savedTimeRef = useRef(0);

  const handleVideoEnded = () => {
    // Video bitince baştan başlat
    console.log('Video ended, resetting to 0');
    savedTimeRef.current = 0;
    if (videoRef.current) {
      videoRef.current.seekTo(0);
      videoRef.current.play();
    }
  };

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
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let currentMouseX = 0;
    let targetMouseX = 0;
    let currentOpacity = 0;
    let targetOpacity = 0;
    let isMouseInHero = false;

    const handleMouseMove = (e) => {
      if (isMouseInHero) {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 800;
      }
    };

    const handleMouseEnter = () => {
      console.log('Mouse entered, starting from:', savedTimeRef.current);
      isMouseInHero = true;
      targetOpacity = 1;

      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.currentTime = savedTimeRef.current;
        videoElement.play();
      } else if (videoRef.current) {
        videoRef.current.seekTo(savedTimeRef.current);
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      isMouseInHero = false;
      targetOpacity = 0;
      targetMouseX = 0;

      const videoElement = document.querySelector('video');
      if (videoElement) {
        const currentTime = videoElement.currentTime;
        savedTimeRef.current = currentTime;
        videoElement.pause();
      } else if (videoRef.current) {
        const currentTime = videoRef.current.currentTime || 0;
        savedTimeRef.current = currentTime;
        videoRef.current.pause();
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

    animate();

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener("mouseenter", handleMouseEnter);
        heroRef.current.removeEventListener("mouseleave", handleMouseLeave);
        heroRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section>
      <div className={styles.hero} ref={heroRef}>
        <div className="g-container">
          <h1 className={styles.hero__title}>{data.title}</h1>
          <div
            className={`${styles.videoContainer} ${styles.videoContainerDesktop}`}
            ref={videoContainerRef}
          >
            <div className={styles.video}>{memoizedVideoStatic}</div>
          </div>
        </div>
      </div>
      <div className="g-container mb">
        <Banner src={data.banner} />
      </div>
    </section>
  );
};

export default ScrollAnimation;
