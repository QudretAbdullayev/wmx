import React from 'react'

const RichText = () => {
  return (
    <section className="g-container">
      <div className={`${styles.richText} ml`} dangerouslySetInnerHTML={{ __html: data.rich_text }} />
    </section>
  )
}

export default RichText