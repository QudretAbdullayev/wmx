import CourseFeatures from './containers/CourseFeatures/CourseFeatures'
import FAQ from './containers/FAQ/FAQ'
import Hero from './containers/Hero/Hero'
import YourProfessor from './containers/YourProfessor/YourProfessor'

const ProgramPage = ({data}) => {

  return (
    <>
    <Hero data={data.hero} color={data.color}/>
    <YourProfessor data={data.professor}/>
    <FAQ data={data.faq}/>
    <CourseFeatures data={data.course_features} color={data.color}/>

    </>
  )
}

export default ProgramPage