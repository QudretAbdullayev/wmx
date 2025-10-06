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
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                });
                return playPromiseRef.current;
            }
        },
        pause: async () => {
            if (playPromiseRef.current) {
                try {
                    await playPromiseRef.current;
                } catch (error) {
                }
                playPromiseRef.current = null;
            }
            
            if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
            }
        },
        seekTo: (time) => {
            if (videoRef.current) {
                videoRef.current.currentTime = time;
            }
        },
        get currentTime() {
            return videoRef.current ? videoRef.current.currentTime : 0;
        },
        get duration() {
            return videoRef.current ? videoRef.current.duration : 0;
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
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
                    }
                }
                
                playPromiseRef.current = videoRef.current.play().catch(error => {
                });
            } else if (!isActive && videoRef.current) {
                if (playPromiseRef.current) {
                    try {
                        await playPromiseRef.current;
                    } catch (error) {
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
        if (!loop && videoRef.current) {
            videoRef.current.currentTime = 0;
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