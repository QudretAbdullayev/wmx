import Rule from './containers/Rule/Rule'

const RulesPage = ({text}) => {
  return (
    <Rule text={text[0].content}/>
  )
}

export default RulesPage
