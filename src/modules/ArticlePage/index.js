import Hero from './containers/Hero/Hero'
import RichText from './containers/RichText/RichText'

const ArticlePage = ({data}) => {
  return (
    <>
      <Hero data={data}/>
      <RichText data={data} />
    </>
  )
}

export default ArticlePage