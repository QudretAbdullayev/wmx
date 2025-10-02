"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './VideoStatic.module.scss';

const VideoStatic = forwardRef(({ 
    src, 
    props, 
    loop = true, 
    autoPlay = true, 
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
                        // Previous play interrupted
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                    // Video play interrupted
                });
                return playPromiseRef.current;
            }
        },
        pause: async () => {
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
        }
    }));

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [src]);



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
                    // Video play interrupted
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
            onEnded={handleEnded}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
});

VideoStatic.displayName = 'VideoStatic';

export default VideoStatic;