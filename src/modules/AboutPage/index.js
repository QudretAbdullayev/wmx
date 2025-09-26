import ProjectHover from "./components/ProjectHover/ProjectHover";
import Features from "./containers/Features/Features";
import Founder from "./containers/Founder/Founder";
import Hero from "./containers/Hero/Hero";
import Mission from "./containers/Mission/Mission";
import Team from "./containers/Team/Team";


const AboutPage = ({data}) => {
  return (
    <>
      <Hero data={data.hero} />
      <Mission data={data.mission} />
      <Founder data={data.founder} />
      <Team data={data.team} />
      <Features data={data.features} />
    </>
  )
}

export default AboutPage;
