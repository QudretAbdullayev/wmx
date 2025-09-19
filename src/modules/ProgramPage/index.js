import About from './containers/About/About'
import Consultation from './containers/Consultation/Consultation'
import CourseFeatures from './containers/CourseFeatures/CourseFeatures'
import FAQ from './containers/FAQ/FAQ'
import FounderVideo from './containers/FounderVideo/FounderVideo'
import Hero from './containers/Hero/Hero'
import Modules from './containers/Modules/Modules'
import YourProfessor from './containers/YourProfessor/YourProfessor'

const ProgramPage = ({data}) => {

  return (
    <>
    <Hero data={data.hero} color={data.color}/>
    <About data={data.about}/>
    <FounderVideo data={data.founder_video}/>
    <CourseFeatures data={data.course_features} color={data.color}/>
    <Modules data={data.modules}/>
    <YourProfessor data={data.professor}/>
    <Consultation data={data.consultation}/>
    <FAQ data={data.faq}/>

    </>
  )
}

export default ProgramPage