import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Explain.module.scss'
import CustomPagination from '@/components/CustomPagination/CustomPagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useState, useRef, useEffect } from 'react'
import YoutubeThumb from '@/components/YoutubeThumb/YoutubeThumb'
import ReelThumb from '@/components/ReelThumb/ReelThumb'

const Explain = ({ data }) => {
  const swiperRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 700)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])


  const handlePaginationClick = (index) => {
    setActiveSlide(index)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex)
  }

  return (
    <section className="g-container">
      <div className={styles.explain}>
        <div className='mb'>
          <SectionTitle title={data.section_title} />
          <h4 className={`${styles.title} ml`}>{data.title}</h4>
        </div>
        <div className={styles.slider}>
          <Swiper
            ref={swiperRef}
            slidesPerView={isMobile ? 1 : "auto"}
            freeMode={!isMobile}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className={styles.swiper}
            onSlideChange={handleSlideChange}
            spaceBetween={isMobile ? 20 : 0}
          >
            {data.videos.map((item, index) => (
              item.reel === false ? (
                <SwiperSlide key={index} className={styles.slide}>
                  <div className={styles.video}>
                    <YoutubeThumb video={item.url} img={item.thumbnail} />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={index} className={styles.slideReel}>
                  <div className={styles.video}>
                    <ReelThumb video={item.url} img={item.thumbnail} />
                  </div>
                </SwiperSlide>
              )
            ))}
          </Swiper>
          <CustomPagination
            totalSlides={data.length}
            activeSlide={activeSlide}
            onSlideChange={handlePaginationClick}
          />
        </div>
      </div>
    </section >
  )
}

export default Explain;


