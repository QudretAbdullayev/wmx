import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Explain.module.scss'
import VideoStatic from '@/components/VideoStatic/VideoStatic'
import CustomPagination from '@/components/CustomPagination/CustomPagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useState, useRef, useEffect } from 'react'

const Explain = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [videoDurations, setVideoDurations] = useState([])
  const [currentVideoTime, setCurrentVideoTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRefs = useRef([])
  const swiperRef = useRef(null)

  const data = [
    { thumbnail: '/videos/thumbnail-youtube-1.mp4', type: 'video' },
    { thumbnail: '/videos/thumbnail-reel-1.mp4', type: 'reel' },
    { thumbnail: '/videos/thumbnail-reel-2.mp4', type: 'reel' },
    { thumbnail: '/videos/thumbnail-youtube-2.mp4', type: 'video' },
  ]

  const handleDurationChange = (index, duration) => {
    setVideoDurations(prev => {
      const newDurations = [...prev]
      newDurations[index] = duration
      return newDurations
    })
  }

  const handleTimeUpdate = (index, currentTime) => {
    if (index === activeSlide) {
      setCurrentVideoTime(currentTime)
    }
  }

  const handleVideoEnded = (index) => {
    if (index === activeSlide && index < data.length - 1) {
      // Auto advance to next slide
      const nextSlide = index + 1
      setActiveSlide(nextSlide)
      if (swiperRef.current) {
        swiperRef.current.slideTo(nextSlide)
      }
    }
  }

  const handlePaginationClick = (index) => {
    // Pause current video first
    if (videoRefs.current[activeSlide]) {
      videoRefs.current[activeSlide].pause();
    }

    setActiveSlide(index)
    setCurrentVideoTime(0)
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex

    // Pause current video first
    if (videoRefs.current[activeSlide]) {
      videoRefs.current[activeSlide].pause();
    }

    setActiveSlide(newIndex)
    setCurrentVideoTime(0)
  }

  useEffect(() => {
    // Reset video time when slide changes
    setCurrentVideoTime(0)

    // Small delay to ensure smooth video transitions
    const timer = setTimeout(() => {
      if (videoRefs.current[activeSlide]) {
        videoRefs.current[activeSlide].play().catch(error => {
          console.log('Video play interrupted:', error);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeSlide])

  return (
    <section className={styles.explain}>
      <div className='g-container mb'>
        <SectionTitle title="Explain" />
        <h4 className={`${styles.title} ml`}>x School is a Los Angeles-based branding and design agency where artistry meets innovation, crafting unforgettable experiences through meticulous craftsmanship and cutting-edge technology.</h4>
      </div>
      <div className={styles.slider}>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          freeMode
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={styles.swiper}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {data.map((item, index) => (
            item.type === 'video' ? (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.video}>
                  <VideoStatic
                    ref={(el) => videoRefs.current[index] = el}
                    src={item.thumbnail}
                    loop={false}
                    autoPlay={false}
                    isActive={index === activeSlide}
                    onTimeUpdate={(time) => handleTimeUpdate(index, time)}
                    onDurationChange={(duration) => handleDurationChange(index, duration)}
                    onEnded={() => handleVideoEnded(index)}
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index} className={styles.slideReel}>
                <div className={styles.video}>
                  <VideoStatic
                    ref={(el) => videoRefs.current[index] = el}
                    src={item.thumbnail}
                    loop={false}
                    autoPlay={false}
                    isActive={index === activeSlide}
                    onTimeUpdate={(time) => handleTimeUpdate(index, time)}
                    onDurationChange={(duration) => handleDurationChange(index, duration)}
                    onEnded={() => handleVideoEnded(index)}
                  />
                </div>
              </SwiperSlide>
            )
          ))}
        </Swiper>
        <CustomPagination
          totalSlides={data.length}
          activeSlide={activeSlide}
          onSlideChange={handlePaginationClick}
          videoDurations={videoDurations}
          currentVideoTime={currentVideoTime}
          isPlaying={isPlaying}
        />
      </div>
    </section >
  )
}

export default Explain;


