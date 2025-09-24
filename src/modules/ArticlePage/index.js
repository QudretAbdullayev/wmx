import Hero from './containers/Hero/Hero'

const ArticlePage = ({data}) => {
  return (
    <>
      <Hero data={data.hero} />
    </>
  )
}

export default ArticlePage