import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.scss'
import X from '@/assets/icons/X'
import Square from '@/assets/icons/Square'
import { Swiper, SwiperSlide } from 'swiper/react'
import HoverText from '@/components/HoverText/HoverText'
import Copy from '@/components/Copy/Copy'

const slideDuration = 3000

const Hero = ({ data }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [progress, setProgress] = useState(0)

    const [forceCompleteIndex, setForceCompleteIndex] = useState(null)

    const swiperRef = useRef(null)

    const rafRef = useRef(null)
    const startRef = useRef(null)
    const isPausedRef = useRef(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === data.x_images.length - 1 ? 0 : prevIndex + 1
            )
        }, 100)
        return () => clearInterval(interval)
    }, [data.x_images.length])

    useEffect(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }

        startRef.current = performance.now()
        setProgress(0)

        const tick = (now) => {
            if (isPausedRef.current) {
                startRef.current = now - (progress / 100) * slideDuration
            } else {
                const elapsed = now - startRef.current
                const pct = Math.min(100, (elapsed / slideDuration) * 100)
                setProgress(pct)

                if (pct > 0 && forceCompleteIndex !== null) {
                    setForceCompleteIndex(null)
                }

                if (pct >= 100) {
                    setCurrentSlide((s) => s >= data.sliders.length - 1 ? 0 : s + 1)
                    return
                }
            }
            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }
    }, [currentSlide, data.sliders.length])

    useEffect(() => {
        if (swiperRef.current && typeof swiperRef.current.slideTo === 'function') {
            if (swiperRef.current.activeIndex !== currentSlide) {
                swiperRef.current.slideTo(currentSlide, 300)
            }
        }
    }, [currentSlide])

    const handleDotClick = (index) => {
        if (index < 0 || index >= data.sliders.length) return

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }

        setCurrentSlide(index)
        setProgress(0)
        setForceCompleteIndex(index)

        if (swiperRef.current && typeof swiperRef.current.slideTo === 'function') {
            swiperRef.current.slideTo(index, 300)
        }
    }

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex
        if (newIndex !== currentSlide && newIndex < data.sliders.length) {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
            setCurrentSlide(newIndex)
            setProgress(0)
            setForceCompleteIndex(null)
        }
    }

    return (
        <section className="g-container">
            <div className={styles.hero}>
                <div className={styles.hero__x}>
                    <X images={data.x_images} currentImageIndex={currentImageIndex} />
                </div>
                <div className={styles.container}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        onSlideChange={handleSlideChange}
                        slidesPerView={'auto'}
                        freeMode={false}
                        allowTouchMove={true}
                        className={styles.swiper}
                    >
                        {data.sliders.map((item, index) => (
                            <SwiperSlide key={index} className={`${styles.container__slide}`}>
                                <Copy><h1 className={styles.container__title}>{item.title}</h1></Copy>
                                <Copy><div className={styles.container__subtitle}>
                                    <Square />
                                    {item.subtitle}
                                </div></Copy>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={styles.pagination} role="navigation">
                        <div className={styles.pagination__track}>
                            {data.sliders.map((_, index) => {

                                const isCompleted = index <= currentSlide

                                const isActive = index === currentSlide

                                return (
                                    <div key={index} className={styles.pagination__item}>
                                        <button
                                            type="button"
                                            className={`${styles.pagination__dot} ${isCompleted ? styles.pagination__completed : isActive ? styles.pagination__active : styles.pagination__inactive
                                                }`}
                                            onClick={() => handleDotClick(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                        {index < data.sliders.length - 1 && (
                                            <div className={styles.pagination__container}>
                                                <div
                                                    className={`${styles.pagination__container__line} ${index < currentSlide ? styles.pagination__container__completed : styles.pagination__container__inactive}`}
                                                />
                                                {index === currentSlide && (
                                                    <div
                                                        className={styles.pagination__container__progress}
                                                        style={{ height: `${progress}%` }}
                                                        aria-hidden
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <HoverText
                    text={data.button_text}
                    as="a"
                    href="/consultation"
                    className={styles.hero__cta}
                />
            </div>

        </section>
    )
}

export default Hero