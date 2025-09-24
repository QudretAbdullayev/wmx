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

    useImperativeHandle(ref, () => ({
        play: () => videoRef.current?.play(),
        pause: () => videoRef.current?.pause(),
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
        const playVideo = () => {
            if (videoRef.current && isActive) {
                videoRef.current.play().catch(error => {
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
        if (isActive && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Video play interrupted:', error);
            });
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
        }
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