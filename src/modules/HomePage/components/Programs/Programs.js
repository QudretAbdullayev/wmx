import styles from './Programs.module.scss'
import ComponentTitle from '@/components/ComponentTitle/ComponentTitle'
import ProgramCard from '../ProgramCard/ProgramCard';

const Programs = () => {
  return (
    <div className='g-container mb'>
        <ComponentTitle title="Program" />
        <ProgramCard bigIcon="/icons/lineeffect.svg" smallIcon="/icons/smallsquare.svg" />
    </div>
  )
}

export default Programs;

