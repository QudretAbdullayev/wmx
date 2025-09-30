"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Articles from "./containers/Articles/Articles";
import Hero from "./containers/Hero/Hero";
import KnowledgeHub from "./containers/KnowledgeHub/KnowledgeHub";

const KnowledgeHubPage = ({data}) => {
  return (
    <>
      <Hero data={data.hero} />
      <KnowledgeHub data={data.most_readed} />
      <Articles data={data.articles} />
    </>
  )
}

export default KnowledgeHubPage;
