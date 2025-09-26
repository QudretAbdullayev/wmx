import styles from "./Mission.module.scss";
import XAbout from "@/assets/icons/XAbout";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";

const Mission = ({ data }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className="ml">
        <div className={styles.mission}>
          {data.list.map((item, index) => (
            <div key={index} className={styles.mission__item}>
              <div className={styles.mission__icon}>
                <XAbout />
              </div>
              <div className={styles.mission__title}>{item.title}</div>
              <div className={styles.mission__description}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
