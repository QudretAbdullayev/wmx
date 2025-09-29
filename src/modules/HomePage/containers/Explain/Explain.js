import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Explain.module.scss'
import CustomPagination from '@/components/CustomPagination/CustomPagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useState, useRef, useEffect } from 'react'
import YoutubeThumb from '@/components/YoutubeThumb/YoutubeThumb'
import ReelThumb from '@/components/ReelThumb/ReelThumb'

const Explain = ({data}) => {
  const swiperRef = useRef(null)
  const youtubeSwiperRef = useRef(null)
  const reelsSwiperRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeYoutubeSlide, setActiveYoutubeSlide] = useState(0)
  const [activeReelsSlide, setActiveReelsSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const youtubeVideos = data.videos.filter(item => item.reel === false)
  const reelVideos = data.videos.filter(item => item.reel === true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 700)
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

  const handleYoutubeSlideChange = (swiper) => {
    setActiveYoutubeSlide(swiper.activeIndex)
  }

  const handleReelsSlideChange = (swiper) => {
    setActiveReelsSlide(swiper.activeIndex)
  }

  return (
    <section className={styles.explain}>
      <div className='g-container mb'>
        <SectionTitle title={data.section_title} />
        <h4 className={`${styles.title} ml`}>{data.title}</h4>
      </div>

      {isMobile ? (
        <div className='g-container'>
          {youtubeVideos.length > 0 && (
            <div className={styles.youtube}>
              <Swiper
                ref={youtubeSwiperRef}
                slidesPerView={"auto"}
                className={styles.youtube__swiper}
                onSlideChange={handleYoutubeSlideChange}
              >
                {youtubeVideos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.youtube__slide}>
                    <div className={styles.youtube__video}>
                      <YoutubeThumb video={item.url} img={item.thumbnail} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {reelVideos.length > 0 && (
            <div className={styles.reel}>
              <Swiper
                ref={reelsSwiperRef}
                slidesPerView={"auto"}
                className={styles.reel__swiper}
                onSlideChange={handleReelsSlideChange}
              >
                {reelVideos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.reel__slide}>
                    <div className={styles.video}>
                      <ReelThumb video={item.url} img={item.thumbnail} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      ) : (
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
      )}
    </section >
  )
}

export default Explain;