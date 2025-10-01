"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './VideoStatic.module.scss';

const VideoStatic = forwardRef(({ 
    src, 
    props, 
    loop = true, 
    autoPlay = true, 
    onTimeUpdate, 
    onDurationChange, 
    onEnded,
    isActive = false 
}, ref) => {
    const videoRef = useRef(null);
    const playPromiseRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: async () => {
            if (videoRef.current && videoRef.current.paused) {
                
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                        
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                    console.log('Video play interrupted:', error);
                });
                return playPromiseRef.current;
            }
        },
        pause: async () => {
            // Wait for any pending play operation before pausing
            if (playPromiseRef.current) {
                try {
                    await playPromiseRef.current;
                } catch (error) {
                    // Play was interrupted
                }
                playPromiseRef.current = null;
            }
            
            if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
            }
        },
        currentTime: videoRef.current?.currentTime || 0,
        duration: videoRef.current?.duration || 0,
        seekTo: (time) => {
            if (videoRef.current) {
                videoRef.current.currentTime = time;
            }
        }
    }));

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [src]);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current && isActive && videoRef.current.paused) {
                // Wait for any pending play operation
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                        // Previous play was interrupted
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                    console.log('Video play interrupted:', error);
                });
            }
        };

        document.addEventListener('click', playVideo);

        return () => {
            document.removeEventListener('click', playVideo);
        };
    }, [isActive]);

    useEffect(() => {
        const handleActiveChange = async () => {
            if (isActive && videoRef.current && videoRef.current.paused) {
                // Wait for any pending play operation
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                        // Previous play was interrupted
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                    console.log('Video play interrupted:', error);
                });
            } else if (!isActive && videoRef.current) {
                // Wait for any pending play operation before pausing
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                        // Play was interrupted
                    }
                    playPromiseRef.current = null;
                }
                
                if (!videoRef.current.paused) {
                    videoRef.current.pause();
                }
            }
        };

        handleActiveChange();
    }, [isActive]);

    const handleTimeUpdate = () => {
        if (onTimeUpdate && videoRef.current) {
            onTimeUpdate(videoRef.current.currentTime);
        }
    };

    const handleDurationChange = () => {
        if (onDurationChange && videoRef.current) {
            onDurationChange(videoRef.current.duration);
        }
    };

    const handleEnded = () => {
        if (onEnded) {
            onEnded();
        }
    };

    return (
        <video
            {...props}
            {...(autoPlay && { autoPlay: true })}
            {...(loop && { loop: true })}
            muted
            playsInline
            ref={videoRef}
            className={styles.video}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleDurationChange}
            onEnded={handleEnded}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
});

VideoStatic.displayName = 'VideoStatic';

export default VideoStatic;