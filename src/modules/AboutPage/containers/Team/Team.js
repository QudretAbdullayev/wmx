import styles from "./Team.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import ImageMarquee from "../../components/ImageMarquee/ImageMarquee";
const Team = ({ data, images }) => {
  return (
    <section className={styles.team}>
      <div className="g-container">
        <SectionTitle title={data[0].team_section_title} />
      </div>
      <div className="g-container ml">
        <ComponentTitle title={data[0].title} />
      </div>
      <ImageMarquee images={images} />
      <div className="g-container ml mb">
        <div className={styles.team__container}>
          <div className={styles.team__subtitle}>({data[0].subtitle_section})</div>
          <div className={styles.team__text}>
            <div className={styles.team__text__title}>{data[0].subtitle}</div>
            <div className={styles.team__text__description}>
              {data[0].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
