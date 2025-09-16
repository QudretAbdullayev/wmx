import styles from "./About.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import Description from "@/components/Description/Description";

const About = () => {
  const descTitle =
    "Crafting innovative digital experiences, brand identities and art direction that drive results, spark connection and inspire loyalty through creative vision and strategic insight.";
  const heroDescription =
    "Through a balance of creativity and strategy, we craft digital experiences that resonate. Focused on innovation, clarity, and emotional connection, our work transforms ideas into impactful design with purpose and personality. \r\n\r\n\r\nA bloueder Through a balance of creativity and strategy, we craft digital experiences that resonate. Focused on innovation, clarity, and emotional connection, our work transforms ideas into impactful design with purpose and personality.";
  return (
    <div className="g-container mb">
      <ComponentTitle title="About" />
      <div className={`ml ${styles.container}`}>
        <Description
          classNameDescription={styles.description}
          classNameTitle={styles.title}
          title={descTitle}
          description={heroDescription}
        />
      </div>
    </div>
  );
};

export default About;
