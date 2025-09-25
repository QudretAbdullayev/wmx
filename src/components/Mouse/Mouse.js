"use client"
import { useState, useEffect } from 'react'
import styles from './Mouse.module.scss'

const Mouse = ({ text }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)
      
      // Clear existing timeout
      clearTimeout(timeoutId)
      
      // Set new timeout to hide after 6 seconds of no movement
      timeoutId = setTimeout(() => {
        setIsVisible(false)
      }, 6000)
    }

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove)

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div 
      className={`${styles.mouse} ${isVisible ? styles.visible : styles.hidden}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {text}
    </div>
  )
}

export default Mouse
