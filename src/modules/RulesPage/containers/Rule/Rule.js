"use client"
import styles from './Rule.module.scss'
import { useEffect, useState } from 'react'
import SafeLink from '@/components/SafeLink/SafeLink'

const Rule = ({ data, activeIndex, links = [] }) => {
  const initialIndex = typeof activeIndex === 'number' ? activeIndex : (data?.length > 1 ? 1 : 0)
  const [selectedIndex, setSelectedIndex] = useState(initialIndex)

  useEffect(() => {
    if (typeof activeIndex === 'number') setSelectedIndex(activeIndex)
  }, [activeIndex])

  return (
    <section className={styles.rule}>
      <div className="g-container ml mt mb mr">
        <div className={`${styles.rule__title} mb`}>
          {data?.map((item, index) => (
            <SafeLink
              key={item.title}
              href={links[index] || ''}
              onClick={() => setSelectedIndex(index)}
              className={`${styles.rule__title} ${index === selectedIndex ? styles.rule__active : ''}`}
            >
              {item.title}
            </SafeLink>
          ))}
        </div>
        <div
          className="rich"
          dangerouslySetInnerHTML={{ __html: data?.[selectedIndex]?.description || '' }}
        />
      </div>
    </section>
  )
}

export default Rule
