"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Founder.module.scss";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import FounderComponent from "@/components/Founder/Founder";
import Description from "@/components/Description/Description";

gsap.registerPlugin(ScrollTrigger);

const Founder = ({ data }) => {
  const founderRef = useRef(null);
  const descriptionRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const founder = founderRef.current;
    const description = descriptionRef.current;
    const section = sectionRef.current;

    if (!founder || !description || !section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        once: true,
      }
    });

    tl.to(founder, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(description, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.hero} mb`}>
      <div className="g-container">
        <SectionTitle title={data.section_title} />
        <div className="ml">
          <ComponentTitle title={data.title} />
        </div>
      </div>
      <div className="g-container">
        <div className="ml">
          <div className={styles.hero__detail}>
            <div ref={founderRef} className={styles.founderContainer}>
              <FounderComponent
                image={data.image}
                name={data.name}
                position={data.position}
                size={"small"}
              />
            </div>
            <div ref={descriptionRef} className={styles.descriptionContainer}>
              <Description
                classNameDescription={styles.description}
                classNameTitle={styles.title}
                title={data.subtitle}
                description={data.description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
