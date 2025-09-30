import ComponentTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./TellUs.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

const TellUs = ({ data }) => {
  return (
    <div className="g-container mb">
      <ComponentTitle title="Tell us what you think" />
      <div
        className="ml"
        data-aos="fade-up"
        data-aos-duration={200}
        data-aos-easing="ease"
      >
        <ContactForm data={data} />
      </div>
    </div>
  );
};

export default TellUs;
