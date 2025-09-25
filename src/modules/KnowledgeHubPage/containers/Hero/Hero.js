import styles from "./Hero.module.scss";
import Banner from "@/components/Banner/Banner";
import HoverTitle from "@/components/HoverTitle/HoverTitle";

const Hero = ({ data }) => {
  return (
    <section className="g-container mb">
      <div className={`${styles.hero} ml mb`}>
        <HoverTitle title={data.title} image={data.hover_image} />
      </div>
      <Banner src={data.banner} />
    </section>
  );
};

export default Hero;
