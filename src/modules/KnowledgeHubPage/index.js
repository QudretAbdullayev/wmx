"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Articles from "./containers/Articles/Articles";
import KnowledgeHub from "./containers/KnowledgeHub/KnowledgeHub";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";

const KnowledgeHubPage = ({data}) => {
  return (
    <>
      <ScrollAnimation title={data.title} banner={data.image} video={data.video}/>
      {/* <KnowledgeHub title={data.most_readed_title}/> */}
      <Articles news={data.news} title={data.articles_title} button={data.button_text}/>
    </>
  )
}

export default KnowledgeHubPage;
