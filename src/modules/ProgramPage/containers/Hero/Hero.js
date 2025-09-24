import Founder from "@/components/Founder/Founder";
import styles from "./Hero.module.scss";
import Ellipse from "@/assets/icons/Ellipse";
import HoverText from "@/components/HoverText/HoverText";

const Hero = ({data, color}) => {
  
  return (
    <section className="g-container mb">
      <div className={styles.hero}>
        <div className={styles.detail} style={{ backgroundColor: `${color}`}}>
          <h2 className={styles.detail__title}>{data.title}</h2>
          <p className={styles.detail__desc}>{data.description}</p>
          <div className={styles.detail__tags}>
            {data.tags.map((tag, index) => (
              <div key={index} className={styles.detail__tag}>
                {tag}
                {index < data.tags.length - 1 && <Ellipse />}
              </div>
            ))}
          </div>
          <HoverText text={data.button} className={styles.detail__button} as="button"/>
        </div>
        <Founder
          image={data.image}
          name={data.name}
          position={data.position}
          size={"medium"}
        />
      </div>
    </section>
  );
};

export default Hero;
