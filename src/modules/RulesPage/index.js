import Rule from './containers/Rule/Rule'

const RulesPage = ({data, activeIndex, links}) => {
  return (
    <Rule data={data.rules} activeIndex={activeIndex} links={links} />
  )
}

export default RulesPage
