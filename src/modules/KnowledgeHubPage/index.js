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
      <ScrollAnimation data={data.hero} />
      <KnowledgeHub data={data.most_readed} />
      <Articles data={data.articles} />
    </>
  )
}

export default KnowledgeHubPage;
