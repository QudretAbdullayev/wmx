"use client";

import React, { useRef, useEffect } from "react";
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
  from = "bottom"
}) {
  const cardRef = useRef(null);
  const scrollTriggerInstance = useRef(null);

  // Sayfa değişikliklerinde ScrollTrigger'ı yenile
  useEffect(() => {
    const handleRouteChange = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      // Önceki ScrollTrigger instance'ını temizle
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
      }

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
        const scrollTrigger = ScrollTrigger.create({
          trigger: cardRef.current,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(cardRef.current, animationState);
          },
        });
        scrollTriggerInstance.current = scrollTrigger;
      } else {
        gsap.to(cardRef.current, animationState);
      }

      // ScrollTrigger'ı yenile
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        if (scrollTriggerInstance.current) {
          scrollTriggerInstance.current.kill();
        }
      };
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
    <div ref={cardRef} style={{ visibility: "hidden", overflow: "hidden", willChange: "transform" }} className={styles.card}>
      {children}
    </div>
  );
}