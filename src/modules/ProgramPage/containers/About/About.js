import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./About.module.scss";

const About = ({data}) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className={`${styles.content} ml`} dangerouslySetInnerHTML={{ __html: data.content }} />
      <div className={`${styles.table} ml`}>
        {data.table.map((item, index) => (
          <div key={index} className={styles.table__item}>
            <div className={styles.table__item__title}>{item.title}</div>
            <div className={styles.table__item__values}>{item.values.map((value, index) => (
              <div key={index} className={styles.table__item__value}>{value}</div>
            ))}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
