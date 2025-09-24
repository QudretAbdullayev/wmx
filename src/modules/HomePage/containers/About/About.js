import styles from "./About.module.scss";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import Description from "@/components/Description/Description";

const About = ({data}) => {

  return (
    <section className="mb">
      <SectionTitle title={data.section_title} />
      <div className={`ml ${styles.container}`}>
        <Description
          classNameDescription={styles.description}
          classNameTitle={styles.title}
          title={data.title}
          description={data.description}
        />
      </div>
    </section>
  );
};

export default About;
