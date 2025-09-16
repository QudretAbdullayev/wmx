import ComponentTitle from '@/components/ComponentTitle/ComponentTitle'
import styles from './KnowledgeHub.module.scss'
import KHCard from '../KHCard/KHCard'

const KnowledgeHub = () => {
  return (
    <div className='g-container mb'>
        <ComponentTitle title="Knowledge Hub" />
        <KHCard/>
    </div>
  )
}

export default KnowledgeHub
