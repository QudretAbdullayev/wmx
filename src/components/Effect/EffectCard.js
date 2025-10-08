"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EffectCard({ 
  children, 
  animateOnScroll = true, 
  delay = 0,
  duration = 1,
  ease = "power4.out",
  from = "bottom" // "bottom", "top", "left", "right", "scale", "fade"
}) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      // Initial state based on animation direction
      const initialState = {
        visibility: "hidden",
        opacity: 0,
      };

      const animationState = {
        opacity: 1,
        duration,
        ease,
        delay,
      };

      switch (from) {
        case "bottom":
          initialState.y = 100;
          animationState.y = 0;
          break;
        case "top":
          initialState.y = -100;
          animationState.y = 0;
          break;
        case "left":
          initialState.x = -100;
          animationState.x = 0;
          break;
        case "right":
          initialState.x = 100;
          animationState.x = 0;
          break;
        case "scale":
          initialState.scale = 0.8;
          animationState.scale = 1;
          break;
        case "fade":
          // Only fade, no movement
          break;
        default:
          initialState.y = 100;
          animationState.y = 0;
      }

      gsap.set(cardRef.current, initialState);
      gsap.set(cardRef.current, { visibility: "visible" });

      if (animateOnScroll) {
        gsap.to(cardRef.current, {
          ...animationState,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            once: true,
          },
        });
      } else {
        gsap.to(cardRef.current, animationState);
      }
    },
    { scope: cardRef, dependencies: [animateOnScroll, delay, duration, ease, from] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: cardRef,
      style: { visibility: "hidden", ...(children.props?.style || {}) },
    });
  }

  return (
    <div ref={cardRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}