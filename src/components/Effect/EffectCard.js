"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EffectCard({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(containerRef.current, { 
        y: "30px", 
        opacity: 0,
        visibility: "visible"
      });

      const animationProps = {
        y: "0px",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(containerRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(containerRef.current, animationProps);
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
