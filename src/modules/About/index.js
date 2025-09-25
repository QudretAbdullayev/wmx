import Founder from "./containers/Founder/Founder";
import Team from "./containers/Team/Team";


const AboutPage = ({data}) => {
  return (
    <>
      <Founder data={data.founder} />
      <Team data={data.team} />
    </>
  )
}

export default AboutPage;
