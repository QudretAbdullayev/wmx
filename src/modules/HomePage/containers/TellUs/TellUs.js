import ComponentTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./TellUs.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

const TellUs = ({ data }) => {
  return (
    <div id="tell-us-section" className="g-container mb">
      <ComponentTitle title={data.section_title} />
      <div
        className="ml"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-easing="ease-in-quart"
      >
        <ContactForm data={data} />
      </div>
    </div>
  );
};

export default TellUs;
