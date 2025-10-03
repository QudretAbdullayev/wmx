import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./FounderVideo.module.scss";
import YoutubeThumb from "@/components/YoutubeThumb/YoutubeThumb";

const FounderVideo = ({ data }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className={`${styles.founder} ml`}>
        <h4 className={styles.founder__title}>{data.title}</h4>
        <div className={styles.founder__thumb}>
          <YoutubeThumb video={data.video_url} img={data.video_cover} />
        </div>
      </div>
    </section>
  );
};

export default FounderVideo;
