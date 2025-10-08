import ComponentTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./TellUs.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";
import EffectCard from "@/components/Effect/EffectCard";

const TellUs = ({ data }) => {
  return (

    <div id="tell-us-section" className="g-container mb">
      <ComponentTitle title={data.section_title} />
      <div
        className="ml"
      >
        <EffectCard>
          <ContactForm data={data} />
        </EffectCard>
      </div>
    </div>
  );
};

export default TellUs;
