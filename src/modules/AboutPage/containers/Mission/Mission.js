import styles from "./Mission.module.scss";
import XAbout from "@/assets/icons/XAbout";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";

const Mission = ({ missions, title}) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={title} />
      <div className="ml">
        <div className={styles.mission}>
          {missions.map((item, index) => (
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
