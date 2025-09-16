"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import KnowledgeHub from "./components/KnowledgeHub/KnowledgeHub";
import Explain from "./components/Explain/Explain";
import TellUs from "./components/TellUs/TellUs";
import FAQSection from "./components/FAQSection/FAQSection";

const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <About/>
      <Programs/>
      <KnowledgeHub/>
      <Explain/>
      <TellUs/>
      <FAQSection/>
    </>
  );
};

export default HomePage;
