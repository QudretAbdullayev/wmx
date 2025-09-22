import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Explain.module.scss'
import CustomPagination from '@/components/CustomPagination/CustomPagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useState, useRef, useEffect } from 'react'
import YoutubeThumb from '@/components/YoutubeThumb/YoutubeThumb'
import ReelThumb from '@/components/ReelThumb/ReelThumb'

const Explain = () => {
  const swiperRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const data = [
    { thumbnail: '/images/video-cover.jpg', type: 'video', url: 'https://www.youtube.com/embed/PjafEosCklE' },
    { thumbnail: '/images/video-cover.jpg', type: 'reel', url: '/videos/thumbnail-reel-1.mp4' },
    { thumbnail: '/images/video-cover.jpg', type: 'reel', url: '/videos/thumbnail-reel-2.mp4' },
    { thumbnail: '/images/video-cover.jpg', type: 'video', url: 'https://www.youtube.com/embed/PjafEosCklE' },
  ]

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
        >
          {data.map((item, index) => (
            item.type === 'video' ? (
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
    </section >
  )
}

export default Explain;


