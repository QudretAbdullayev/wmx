import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Features from "./containers/Features/Features";
import Founder from "./containers/Founder/Founder";
import Mission from "./containers/Mission/Mission";
import Team from "./containers/Team/Team";

const AboutPage = ({data}) => {

  return (
    <>
      <ScrollAnimation data={data.hero} title={data.title} banner={data.image} video={data.video}/>
      <Mission title={data.mission_section_title} missions={data.missions} /> 
      <Founder data={data.founders}/>
      <Team data={data.teams} images={data.team_images}/>
      <Features data={data.features} title={data.features_section_title}/>
    </>
  )
}

export default AboutPage;
