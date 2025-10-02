'use client';

import { useState, useRef } from 'react';
import SafeImage from '@/components/SafeImage/SafeImage';
import Mouse from '@/components/Mouse/Mouse';
import styles from './YoutubeThumb.module.scss';

const YoutubeThumb = ({ video, img }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const thumbRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        setIsHovering(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div 
            ref={thumbRef}
            className={styles.thumb} 
            data-youtube-thumb
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handlePlay}
        >
            {isPlaying ? (
                <iframe
                    src={`${video}?autoplay=1&rel=0&showinfo=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )
            : (
                <SafeImage
                    fill
                    src={img}
                    className={styles.thumb__img}
                    alt="Youtube thumbnail"
                />
            )}

            {!isPlaying && !isHovering && (
                <div className={styles.thumb__playButton}>
                    PLAY
                </div>
            )}
            {isHovering && <Mouse text={isPlaying ? "PAUSE" : "PLAY"} elementRef={thumbRef} />}
        </div>
    );
};

export default YoutubeThumb;