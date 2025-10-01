import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./FAQ.module.scss";
import FAQComponent from "@/components/FAQ/FAQ";

const FAQ = ({ data }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div
        className="ml"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-easing="ease-in-quart"
      >
        <FAQComponent faqData={data.faqs} />
      </div>
    </section>
  );
};

export default FAQ;
