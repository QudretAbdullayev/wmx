"use client"

const DangerousHTML = ({ text }) => {

  return (
    <div
      className="rich"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default DangerousHTML;
