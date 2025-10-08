"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EffectCard({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);
  const scrollTriggerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const element = containerRef.current;

      gsap.set(element, { 
        y: 30, 
        opacity: 0,
        visibility: "visible"
      });

      const animate = () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: delay,
        });

        // Animasyon başladığında ScrollTrigger'ı temizle
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        }
      };

      if (animateOnScroll) {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          once: true,
          onEnter: animate,
        });
      } else {
        animate();
      }

      // Cleanup
      return () => {
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}