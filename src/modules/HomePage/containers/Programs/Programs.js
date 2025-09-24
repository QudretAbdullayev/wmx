import styles from "./Programs.module.scss";
import ComponentTitle from "@/components/SectiontTitle/SectiontTitle";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Programs = ({data}) => {
  return (
    <section className="mb">
        <ComponentTitle title={data.section_title} />
      <div className={styles.programs}>
      <Swiper slidesPerView={"auto"} freeMode className={styles.swiper}>
        {data.programs_list.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <ProgramCard
              data={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Programs;
