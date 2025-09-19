import Articles from "./containers/Articles/Articles";
import Hero from "./containers/Hero/Hero";
import MostReaded from "./containers/MostReaded/MostReaded";

const KnowledgeHubPage = ({data}) => {
  return (
    <>
      <Hero data={data.hero} />
      <MostReaded data={data.most_readed} />
      <Articles data={data.articles} />
    </>
  )
}

export default KnowledgeHubPage;
