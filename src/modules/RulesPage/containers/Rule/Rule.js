"use client"

import DangerousHTML from '../../components/DangerousHTML/DangerousHTML'
import Title from '../../components/Title/Title'

const Rule = ({ text }) => {

  return (
    <section className="g-container ml mt mb mr">
        <Title/>
        <DangerousHTML text={text}/>
    </section>
  )
}

export default Rule
