"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './ProjectHover.module.scss';

export default function ProjectHover() {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const isInsideRef = useRef(false);

  const bgPositions = {
    p1: "0 0",
    p2: "0 25%",
    p3: "0 50%",
    p4: "0 75%",
    p5: "0 100%",
  };

  const projectsData = [
    { id: 'p1', client: 'Design Thinking in Action', location: 'Creative Bootcamp', service: 'UX Design, Prototyping, Research', image: '/images/test-1.png' },
    { id: 'p2', client: 'Design Thinking in Action', location: 'Creative Bootcamp', service: 'UX Design, Prototyping, Research', image: '/images/test-2.png' },
    { id: 'p3', client: 'Design Thinking in Action', location: 'Creative Bootcamp', service: 'UX Design, Prototyping, Research', image: '/images/test-3.png' },
    { id: 'p4', client: 'Design Thinking in Action', location: 'Creative Bootcamp', service: 'UX Design, Prototyping, Research', image: '/images/test-4.png' },
    { id: 'p5', client: 'Design Thinking in Action', location: 'Creative Bootcamp', service: 'UX Design, Prototyping, Research', image: '/images/test-5.png' },
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
          previewRef.current.style.transform = 'scale(1)';
        } else {
          previewRef.current.style.transform = 'scale(0)';
        }
      }
    }
  };

  const moveProject = (e) => {
    if (!previewRef.current) return;
    const previewRect = previewRef.current.getBoundingClientRect();
    const offsetX = previewRect.width / 2;
    const offsetY = previewRect.height / 2;
    previewRef.current.style.left = e.clientX - offsetX + "px";
    previewRef.current.style.top = e.clientY - offsetY + "px";
  };

  const moveProjectImg = (projectId) => {
    if (!previewImgRef.current) return;
    previewImgRef.current.style.backgroundPosition = bgPositions[projectId] || "0 0";
    previewImgRef.current.style.transition = 'background-position 0.4s';
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveStuff);
    return () => {
      window.removeEventListener("mousemove", moveStuff);
    };
  }, []);

  return (
    <section className={styles.projectHover}>
      <div className={styles.preview} ref={previewRef}>
        <div className={styles.previewImg} ref={previewImgRef}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.projects} ref={projectsRef}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={styles.project}
              onMouseMove={(e) => {
                moveProject(e);
                moveProjectImg(project.id);
              }}
            >
              <div className={styles.client}>
                {project.client}
              </div>
              <div className={styles.location}>
                {project.location}
              </div>
              <div className={styles.service}>
                {project.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}