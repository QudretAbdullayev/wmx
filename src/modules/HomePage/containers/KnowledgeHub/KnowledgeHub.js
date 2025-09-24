import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./KnowledgeHub.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import KnowledgeHubCard from "@/components/KnowledgeHubCard/KnowledgeHubCard";

const KnowledgeHub = ({ data }) => {

  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} slug={data.slug} slug_name={data.slug_name} />
      <div className={`${styles.knowledge} mb`}>
        <Swiper slidesPerView={"auto"} freeMode className={styles.swiper}>
          {data.articles.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <KnowledgeHubCard article={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KnowledgeHub;
