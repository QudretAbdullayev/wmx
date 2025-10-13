"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ProjectHover.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

export default function ProjectHover({data}) {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const isInsideRef = useRef(false);
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 700);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isMouseInsideContainer = (x, y) => {
    if (!projectsRef.current || !isDesktop) return false;
    const containerRect = projectsRef.current.getBoundingClientRect();
    return (
      x >= containerRect.left &&
      x <= containerRect.right &&
      y >= containerRect.top &&
      y <= containerRect.bottom
    );
  };

  const moveStuff = useCallback((clientX, clientY) => {
    if (!isDesktop) return;
    
    const mouseInside = isMouseInsideContainer(clientX, clientY);

    if (mouseInside !== isInsideRef.current) {
      isInsideRef.current = mouseInside;
      if (previewRef.current) {
        if (isInsideRef.current) {
          previewRef.current.style.transform = "scale(1)";
        } else {
          previewRef.current.style.transform = "scale(0)";
        }
      }
    }
  }, [isDesktop, isMouseInsideContainer]);

  const moveProject = (clientY) => {
    if (!isDesktop || !previewRef.current) return;
    
    const previewRect = previewRef.current.getBoundingClientRect();
    const offsetY = previewRect.height / 2;
    previewRef.current.style.top = clientY - offsetY + "px";
  };

  const moveProjectImg = (projectIndex) => {
    if (!isDesktop || !previewImgRef.current) return;
    const translateY = projectIndex * -220;
    previewImgRef.current.style.transform = `translateY(${translateY}rem)`;
    previewImgRef.current.style.transition = "transform 0.4s ease";
  };

  useEffect(() => {
    if (!isDesktop) return; // Desktop değilse event listener'ları ekleme
    
    let isTracking = false;

    const updateMousePosition = (e) => {
      let clientX, clientY;
      
      if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.clientX !== undefined && e.clientY !== undefined) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      currentMousePos.current = { x: clientX, y: clientY };

      if (!isTracking) {
        isTracking = true;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          moveStuff(clientX, clientY);
          isTracking = false;
        });
      }
    };

    const handleWheel = (e) => {
      if (e.deltaX !== 0 || e.deltaY !== 0) {
        const clientX = currentMousePos.current.x;
        const clientY = currentMousePos.current.y;
        moveStuff(clientX, clientY);
      }
    };

    document.addEventListener("mousemove", updateMousePosition, { passive: true });
    document.addEventListener("touchmove", updateMousePosition, { passive: true });
    document.addEventListener("wheel", handleWheel, { passive: true });
    
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("touchmove", updateMousePosition);
      document.removeEventListener("wheel", handleWheel);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [moveStuff, isDesktop]);

  const handleInteraction = (e, index) => {
    if (!isDesktop) return;
    
    let clientY;
    
    if (e.touches && e.touches[0]) {
      clientY = e.touches[0].clientY;
    } else if (e.clientY !== undefined) {
      clientY = e.clientY;
    } else {
      return;
    }
    
    moveProject(clientY);
    moveProjectImg(index);
  };

  return (
    <section className={styles.container}>
      {isDesktop && (
        <div className={styles.preview} ref={previewRef}>
          <div className={styles.preview__image}>
            <div className={styles.preview__image__container} ref={previewImgRef}>
              {data.map((project, index) => (
                <div key={index} className={styles.preview__image__single}>
                  <SafeImage src={project.image_desktop} alt={project.title} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.projects} ref={projectsRef}>
        {data.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            onMouseMove={isDesktop ? (e) => handleInteraction(e, index) : undefined}
            onTouchMove={isDesktop ? (e) => handleInteraction(e, index) : undefined}
            onMouseEnter={isDesktop ? () => {
              moveProject(currentMousePos.current.y);
              moveProjectImg(index);
            } : undefined}
            onTouchStart={isDesktop ? (e) => handleInteraction(e, index) : undefined}
          >
            <div className={styles.project__texts}>
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.title}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.title}
                  </span>
                </div>
              </div>
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.category}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.description}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.description}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.project__image}>
              <SafeImage src={project.image_mobile} alt={project.title} fill />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}