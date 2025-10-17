"use client";

import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import styles from "./ImageMarquee.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

gsap.registerPlugin(Observer);

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  
  if (!items.length) {
    return gsap.timeline();
  }
  
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  });

  let length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });
  
  const railElement = items[0]?.parentElement;
  const computedStyle = railElement ? window.getComputedStyle(railElement) : null;
  const gap = computedStyle ? parseFloat(computedStyle.gap) || 0 : 0;
  
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    gap + 
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
}

export default function ImageMarquee({ images }) {
  const railRef = useRef(null);

  useEffect(() => {
    const scrollingImages = gsap.utils.toArray(
      `.${styles.marquee__rail} .${styles.marquee__card}`
    );

    if (!scrollingImages.length) {
      return;
    }

    const tl = horizontalLoop(scrollingImages, {
      repeat: -1,
    });

    const observer = Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) {
          factor *= -1;
        }
        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });

    const handleEnter = () => {
      gsap.to(tl, { timeScale: 0.1, duration: 0.2, overwrite: true });
    };
    const handleLeave = () => {
      gsap.to(tl, { timeScale: 1, duration: 0.4 });
    };

    scrollingImages.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      tl.kill();
      observer.kill();
      scrollingImages.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__rail} ref={railRef}>
        {images.map((src, index) => (
          <div key={index} className={styles.marquee__card}>
            <SafeImage src={src.image} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
