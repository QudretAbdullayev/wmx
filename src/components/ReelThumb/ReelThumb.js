'use client';

import { useState, useRef } from 'react';
import SafeImage from '@/components/SafeImage/SafeImage';
import styles from './ReelThumb.module.scss';

const ReelThumb = ({ video, img }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const videoRef = useRef(null);
    const playPromiseRef = useRef(null);

    const handlePlay = async () => {
        setIsPlaying(true);
        setIsLoading(true);
        
        // Small delay to ensure video element is ready
        setTimeout(async () => {
            if (videoRef.current && videoRef.current.paused) {
                // Wait for any pending play operation
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                        // Previous play was interrupted
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                    console.error('Video play failed:', error);
                    setHasError(true);
                    setIsPlaying(false);
                    setIsLoading(false);
                });
            }
        }, 100);
    };

    const handleVideoError = () => {
        setHasError(true);
        setIsPlaying(false);
        setIsLoading(false);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className={styles.reel}>
            {!isPlaying && (
                <>
                    <SafeImage
                        fill
                        src={img}
                        className={styles.reel__img}
                        alt="Reel thumbnail"
                    />
                    <button className={styles.reel__play} onClick={handlePlay}>
                        <SafeImage
                            src="/icons/play-button.svg"
                            width={60}
                            height={60}
                            alt="Play button"
                        />
                    </button>
                </>
            )}

            {isPlaying && (
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        controls
                        playsInline
                        preload="metadata"
                        onError={handleVideoError}
                        onLoadStart={() => setIsLoading(true)}
                        onCanPlay={() => setIsLoading(false)}
                        onPause={handleVideoPause}
                        onPlay={handleVideoPlay}
                        onLoadedData={async () => {
                            if (videoRef.current && videoRef.current.paused) {
                                // Wait for any pending play operation
                                if (playPromiseRef.current) {
                                    try {
                                        await playPromiseRef.current;
                                    } catch (error) {
                                        // Previous play was interrupted
                                    }
                                }
                                
                                playPromiseRef.current = videoRef.current.play().catch(error => {
                                    console.error('Video autoplay failed:', error);
                                });
                            }
                        }}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {isLoading && (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                        </div>
                    )}
                    
                    {hasError && (
                        <div className={styles.error}>
                            <p>Video yüklenemedi</p>
                            <button onClick={() => {
                                setHasError(false);
                                setIsPlaying(false);
                            }}>
                                Tekrar Dene
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ReelThumb;