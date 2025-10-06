"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#tell-us-section') {
      setTimeout(() => {
        const element = document.getElementById('tell-us-section');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);
  return (
    <>
      <Hero data={data.hero}/>
      <Founder data={data.founder}/>
      <About data={data.about}/>
      <Programs data={data.programs}/>
      <KnowledgeHub data={data.knowledge_hub}/>
      <Explain data={data.explain}/>
      <TellUs data={data.tell_us}/>
      <FAQ data={data.faq}/>
    </>
  );
};

export default HomePage;
