import React, { Component } from "react";
import SafeImage from "../../../../components/SafeImage/SafeImage";
import styles from "./Hero.module.scss";
import { formatText } from "@/utils/formatText";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import BigTitle from "@/components/BigTitle/BigTitle";
import Founder from "@/components/Founder/Founder";
import Description from "@/components/Description/Description";

const Hero = ({ data }) => {
  const heroTitle = "Get to know the people\r\nthat get it all done.";
  const heroDescription =
    "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a PhD in Marketing from Lancaster University and has been a marketing professor at London Business School, MIT Sloan (visiting), and the University of Minnesota. He has been the recipient of MBA teaching awards at LBS, MIT, Singapore Management University and MBS.\r\n\r\n\r\nMark has been teaching brand management to MBA students at elite business schools and a consulting career working on some of the most successful brands on the planet such as Subaru, De Beers, Ericsson, Sephora, News Corp, Hennessy and Baxter.";
  const descTitle =
    "Vugar Mehdiyev, a leading authority on marketing and brand";

  return (
    <section className={`${styles.hero} mb`}>
      <div className="g-container">
        <ComponentTitle title="Founder" />
        <div className="ml">
          <BigTitle title={heroTitle} />
        </div>
      </div>
      <div className="g-container">
        <div className="ml">
          <div className={styles.hero__detail}>
            <Founder
              image="/images/founder.png"
              name="Vugar Mehdiyev"
              position="CEO & Founder"
              size={"small"}
            />
            <Description
              classNameDescription={styles.description}
              classNameTitle={styles.title}
              title={descTitle}
              description={heroDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
