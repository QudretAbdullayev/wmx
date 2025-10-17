"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { HtmlContent } from "@/utils/HTMLContent";
import VideoStatic from "@/components/VideoStatic/VideoStatic";
import "swiper/css";
import styles from "./RichText.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

const RichText = ({ data }) => {
  return (
    <div className="g-container">
      <div className={`${styles.overview}`}>
        {data?.additional_info?.map((item, index) => (
          <div className={styles.overview__item} key={index}>
            <div className={styles.overview__item__wrapper}>
              {!item?.hide_title && (
                index === 0 ? (
                  <h1
                    className={`${styles.overview__title} ${
                      item?.description ? "" : styles.no__margin
                    }`}
                  >
                    {item.title}
                  </h1>
                ) : (
                  <h2
                    className={`${styles.overview__subtitle} ${
                      item?.description ? "" : styles.no__margin
                    }`}
                  >
                    {item.title}
                  </h2>
                )
              )}
              {item?.description && (
                <HtmlContent html={item.description} className="rich" />
              )}
            </div>
            {(!!item.addition_images?.length ||
              !!item.addition_videos?.length ||
              !!item.addition_youtube?.length) && (
              <div className={styles.media}>
                {/* HALF IMAGE AND DESCRIPTION  */}
                {item?.addition_images?.some((image) => image?.left_image) &&
                  item?.description_right &&
                  item.addition_images
                    .filter((image) => image?.left_image)
                    .map((leftImage, i) => (
                      <div className={styles.holder} key={i}>
                        <div className={styles.holder__img}>
                          <SafeImage
                            src={leftImage.image}
                            alt={item.title}
                          />
                        </div>
                        <HtmlContent
                          html={item.description_right}
                          className={`rich ${styles.holder__text}`}
                        />
                      </div>
                    ))}
                {item?.addition_videos?.map((video, i) => (
                  <div className={styles.video} key={i}>
                    <VideoStatic src={video.video} />
                  </div>
                ))}
                {item?.addition_youtube?.map((video, i) => (
                  <div className={styles.video} key={i}>
                    <iframe
                      loading="lazy"
                      src={video.youtube_url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
                {/* HALF IMAGES */}
                {item?.addition_images?.some(
                  (image) => !image?.is_right && !image?.is_main
                ) && (
                  <div className={styles.images}>
                    {item.addition_images
                      .filter((image) => !image?.is_right && !image?.is_main)
                      .map((image, i) => (
                        <div
                          className={styles.images__item}
                          style={{ width: "calc(50% - 2rem)" }}
                          key={i}
                        >
                          <SafeImage src={image.image} alt={data.title} fill/>
                        </div>
                      ))}
                  </div>
                )}
                {/* FULL IMAGE */}
                {item?.addition_images?.some(
                  (image) => !image?.is_right && image?.is_main
                ) && (
                  <div className={styles.images}>
                    {item.addition_images
                      .filter((image) => image?.is_main)
                      .map((image, i) => (
                        <div
                          className={`${styles.images__item} ${styles.full}`}
                          key={i}
                        >
                          <SafeImage src={image.image} alt={data.title} fill/>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
            {!!item?.addition_reels?.length && (
              <>
                <div className={styles.social__videos__slider}>
                  <Swiper
                    modules={[Mousewheel]}
                    slidesPerView="auto"
                    spaceBetween={20}
                    speed={700}
                    simulateTouch
                    touchEventsTarget="container"
                    freeMode
                    mousewheel={{
                      forceToAxis: true,
                      invert: false,
                      sensitivity: 1,
                      releaseOnEdges: true,
                    }}
                  >
                    {item.addition_reels.slice(0, 3).map((reel, i) => (
                      <SwiperSlide
                        className={styles.social__videos__slide}
                        key={i}
                      >
                        <div className={styles.social__videos__item}>
                          <VideoStatic src={reel.video} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className={styles.social__videos}>
                  {item.addition_reels.slice(0, 3).map((reel, i) => (
                    <div className={styles.social__videos__item} key={i}>
                      <VideoStatic src={reel.video} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RichText;