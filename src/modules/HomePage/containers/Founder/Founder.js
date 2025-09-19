import React, { Component } from "react";
import SafeImage from "../../../../components/SafeImage/SafeImage";
import styles from "./Founder.module.scss";
import { formatText } from "@/utils/formatText";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import BigTitle from "@/components/BigTitle/BigTitle";
import FounderComponent from "@/components/Founder/Founder";
import Description from "@/components/Description/Description";

const Founder = ({ data }) => {
  

  return (
    <section className={`${styles.hero} mb`}>
      <div className="g-container">
        <SectionTitle title={data.section_title} />
        <div className="ml">
          <BigTitle title={data.title} />
        </div>
      </div>
      <div className="g-container">
        <div className="ml">
          <div className={styles.hero__detail}>
            <FounderComponent
              image={data.image}
              name={data.name}
              position={data.position}
              size={"small"}
            />
            <Description
              classNameDescription={styles.description}
              classNameTitle={styles.title}
              title={data.subtitle}
              description={data.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
