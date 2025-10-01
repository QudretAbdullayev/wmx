"use client"
import { useState, useEffect, useRef } from 'react'
import styles from './Mouse.module.scss'

const Mouse = ({ text }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    let currentMouseX = 0;
    let currentMouseY = 0;

    const checkBannerHover = (clientX, clientY) => {
      if (bannerRef.current) {
        const bannerRect = bannerRef.current.getBoundingClientRect()
        const isOverBanner = (
          clientX >= bannerRect.left &&
          clientX <= bannerRect.right &&
          clientY >= bannerRect.top &&
          clientY <= bannerRect.bottom
        )
        setIsVisible(isOverBanner)
      }
    }

    const handleMouseMove = (event) => {
      currentMouseX = event.clientX;
      currentMouseY = event.clientY;
      setMousePosition({ x: currentMouseX, y: currentMouseY })
      checkBannerHover(currentMouseX, currentMouseY)
    }

    const handleScroll = () => {
      checkBannerHover(currentMouseX, currentMouseY)
    }

    const handleResize = () => {
      checkBannerHover(currentMouseX, currentMouseY)
    }

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const bannerElement = document.querySelector('[data-banner]')
    if (bannerElement) {
      bannerRef.current = bannerElement
    }
  }, [])

  return (
    <div 
      className={`${styles.mouse} ${isVisible ? styles.visible : styles.hidden}`}
      style={{
        left: mousePosition.x - 35,
        top: mousePosition.y - 35,
      }}
    >
      {text}
    </div>
  )
}

export default Mouse
