import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./Consultation.module.scss";

const Consultation = ({data}) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
    </section>
  );
};

export default Consultation;
