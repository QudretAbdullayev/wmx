import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./FAQ.module.scss";
import FAQComponent from "@/components/FAQ/FAQ";
import EffectCard from "@/components/Effect/EffectCard";

const FAQ = ({ data }) => {
  return (
    <section className="g-container">
      <SectionTitle title={data.section_title} />
      <div
        className="ml"
      ><EffectCard>
          <FAQComponent faqData={data.faqs} />
        </EffectCard>
      </div>
    </section>
  );
};

export default FAQ;
