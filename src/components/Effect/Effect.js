"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Effect({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);
  const splitRefs = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(containerRef.current, { visibility: "hidden" });

      splitRefs.current = [];
      lines.current = [];
      elementRefs.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRefs.current.push(element);

        const originalHtml = element.innerHTML;
        
        const normalizedHtml = (() => {
          const unified = originalHtml.replace(/\r\n|\r/g, "\n");
          let result = "";
          let i = 0;
          while (i < unified.length) {
            if (unified[i] !== "\n") {
              result += unified[i];
              i += 1;
              continue;
            }

            let runStart = i;
            while (i < unified.length && unified[i] === "\n") i += 1;
            const runLength = i - runStart;

            result += "<br/>";
            for (let k = 1; k < runLength; k += 1) {
              result += '<span data-copy-empty-line="true" aria-hidden="true"></span>';
            }
          }
          return result;
        })();
        
        if (normalizedHtml !== originalHtml) {
          element.setAttribute("data-copy-original-html", originalHtml);
          element.innerHTML = normalizedHtml;
        }

        const computedStyle = window.getComputedStyle(element);
        let lineHeight = computedStyle.lineHeight;
        if (!lineHeight || lineHeight === "normal") {
          const fontSizePx = parseFloat(computedStyle.fontSize || "16");
          lineHeight = `${Math.round(fontSizePx * 1.2)}rem`;
        }

        element.querySelectorAll('[data-copy-empty-line="true"]').forEach((span) => {
          span.style.display = "block";
          span.style.height = lineHeight;
          span.style.margin = "0";
          span.style.padding = "0";
        });

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            split.lines[0].style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...split.lines);
      });

      gsap.set(lines.current, { y: "100%" });


      gsap.set(containerRef.current, { visibility: "visible" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });

        elementRefs.current.forEach((el) => {
          const original = el.getAttribute("data-copy-original-html");
          if (original != null) {
            el.innerHTML = original;
            el.removeAttribute("data-copy-original-html");
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
      style: { visibility: "hidden", ...(children.props?.style || {}) },
    });
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      style={{ visibility: "hidden" }}
    >
      {children}
    </div>
  );
}