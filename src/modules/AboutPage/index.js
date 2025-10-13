import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Features from "./containers/Features/Features";
import Founder from "./containers/Founder/Founder";
import Mission from "./containers/Mission/Mission";
import Team from "./containers/Team/Team";


const AboutPage = ({data}) => {
  return (
    <>
      <ScrollAnimation data={data.hero} />
      <Mission data={data.mission} />
      <Founder data={data.founder} />
      <Team data={data.team} />
      <Features data={data.features} />
    </>
  )
}

export default AboutPage;
