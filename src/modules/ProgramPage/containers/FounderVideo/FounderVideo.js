import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./FounderVideo.module.scss";

const FounderVideo = ({data}) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
    </section>
  );
};

export default FounderVideo;
