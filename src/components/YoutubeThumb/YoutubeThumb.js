"use client";

import { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import SafeImage from "@/components/SafeImage/SafeImage";
import Mouse from "@/components/Mouse/Mouse";
import styles from "./YoutubeThumb.module.scss";
import "react-responsive-modal/styles.css";
import EffectCard from "../Effect/EffectCard";

const YoutubeThumb = ({ video, img, reel = false }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const thumbRef = useRef(null);

  const handleThumbnailClick = () => {
    setIsPopupOpen(true);
    setIsHovering(false);
  };

  const handlePlayInPopup = () => {
    setIsPlaying(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    if (!isPopupOpen) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <EffectCard>
        <div
          ref={thumbRef}
          className={styles.thumb}
          data-youtube-thumb
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleThumbnailClick}
          style={reel ? { aspectRatio: "9/16" } : { aspectRatio: "16/9" }}
        >
          <SafeImage
            fill
            src={img}
            className={styles.thumb__img}
            alt="Youtube thumbnail"
          />

          <div className={`${styles.thumb__button} ${isHovering ? styles.hidden : styles.visible}`}>PLAY</div>
          {isHovering && <Mouse text="PLAY" elementRef={thumbRef} />}
        </div>
      </EffectCard>
      {/* Modal */}
      <Modal
        open={isPopupOpen}
        onClose={handleClosePopup}
        center
        classNames={{
          modal: styles.modal,
          overlay: styles.overlay,
          modalContainer: styles.container,
        }}
        closeOnOverlayClick={true}
        closeOnEsc={true}
        showCloseIcon={false}
        closeIconSize={30}
      >
        <div className={styles.content}>
          <div
            className={`${reel ? styles.content__reel : styles.content__youtube
              }`}
          >
            <iframe
              src={`${video}?autoplay=1&rel=0&showinfo=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.content__iframe}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default YoutubeThumb;
