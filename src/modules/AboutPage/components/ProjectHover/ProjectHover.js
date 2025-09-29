"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectHover.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

export default function ProjectHover() {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const isInsideRef = useRef(false);

  const projectsData = [
    {
      client: "Design Thinking in Action",
      location: "Creative Bootcamp",
      service: "UX Design, Prototyping, Research",
      image: "/images/team-1.png",
    },
    {
      client: "Design Thinking in Action",
      location: "Creative Bootcamp",
      service: "UX Design, Prototyping, Research",
      image: "/images/team-2.png",
    },
    {
      client: "Design Thinking in Action",
      location: "Creative Bootcamp",
      service: "UX Design, Prototyping, Research",
      image: "/images/team-3.png",
    },
    {
      client: "Design Thinking in Action",
      location: "Creative Bootcamp",
      service: "UX Design, Prototyping, Research",
      image: "/images/team-4.png",
    },
    {
      client: "Design Thinking in Action",
      location: "Creative Bootcamp",
      service: "UX Design, Prototyping, Research",
      image: "/images/team-5.png",
    },
  ];

  const isMouseInsideContainer = (e) => {
    if (!projectsRef.current) return false;
    const containerRect = projectsRef.current.getBoundingClientRect();
    return (
      e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom
    );
  };

  const moveStuff = (e) => {
    const mouseInside = isMouseInsideContainer(e);

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
  };

  const moveProject = (e) => {
    if (!previewRef.current) return;
    const previewRect = previewRef.current.getBoundingClientRect();
    const offsetY = previewRect.height / 2;
    previewRef.current.style.top = e.clientY - offsetY + "px";
  };

  const moveProjectImg = (projectIndex) => {
    if (!previewImgRef.current) return;
    const translateY = projectIndex * -220;
    previewImgRef.current.style.transform = `translateY(${translateY}rem)`;
    previewImgRef.current.style.transition = "transform 0.4s ease";
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveStuff);
    return () => {
      window.removeEventListener("mousemove", moveStuff);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.preview} ref={previewRef}>
        <div className={styles.preview__image}>
          <div className={styles.preview__image__container} ref={previewImgRef}>
            {projectsData.map((project, index) => (
              <div key={index} className={styles.preview__image__single}>
                <SafeImage src={project.image} alt={project.client} fill />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.projects} ref={projectsRef}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              onMouseMove={(e) => {
                moveProject(e);
                moveProjectImg(index);
              }}
            >
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.client}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.client}
                  </span>
                </div>
              </div>
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.client}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.client}
                  </span>
                </div>
              </div>
              <div className={styles.project__text}>
                <div className={styles.animation}>
                  <span className={styles.animation__text}>
                    {project.service}
                  </span>
                  <span className={styles.animation__hover}>
                    {project.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
