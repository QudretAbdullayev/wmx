"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Founder from "./containers/Founder/Founder";
import About from "./containers/About/About";
import Programs from "./containers/Programs/Programs";
import KnowledgeHub from "./containers/KnowledgeHub/KnowledgeHub";
import Explain from "./containers/Explain/Explain";
import TellUs from "./containers/TellUs/TellUs";
import FAQ from "./containers/FAQ/FAQ";
import Hero from "./containers/Hero/Hero";

const HomePage = ({data}) => {
  return (
    <>
      <Hero data={data.hero}/>
      <Founder data={data.founder}/>
      <About data={data.about}/>
      <Programs data={data.programs}/>
      <KnowledgeHub data={data.knowledge_hub}/>
      <Explain />
      <TellUs />
      <FAQ data={data.faq}/>
    </>
  );
};

export default HomePage;
