import styles from "./Founder.module.scss";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import FounderComponent from "@/components/Founder/Founder";
import Description from "@/components/Description/Description";

const Founder = ({ data }) => {
  return (
    <section className={`${styles.hero} mb`}>
      <div className="g-container">
        <SectionTitle title={data.section_title} />
        <div className="ml">
          <ComponentTitle title={data.title} />
        </div>
      </div>
      <div
        className="g-container"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-easing="ease-in-quart"
      >
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
