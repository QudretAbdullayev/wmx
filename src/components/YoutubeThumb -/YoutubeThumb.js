'use client';

import { useState, useRef, useEffect } from 'react';
import SafeImage from '@/components/SafeImage/SafeImage';
import Mouse from '@/components/Mouse/Mouse';
import styles from './YoutubeThumb.module.scss';

const YoutubeThumb = ({ video, img, reel=false }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [streamFetched, setStreamFetched] = useState(false);
    const thumbRef = useRef(null);
    const videoRef = useRef(null);

    // YouTube video ID'sini URL'den çıkar
    const extractVideoId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = extractVideoId(video);

    const fetchVideoStream = async () => {
        if (!videoId) return;
        
        console.log('fetchVideoStream called with videoId:', videoId);
        setLoading(true);
        setError(null);
        
        try {
            console.log('Starting fetch...');
            const response = await fetch(`/api/youtube-stream?videoId=${videoId}`);
            console.log('Response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('API Response data:', data);
            
            if (data.error) {
                throw new Error(data.error);
            }
            
            // En iyi kaliteli stream'i seç
            if (data.urls && data.urls.length > 0) {
                console.log('Available streams:', data.urls);
                
                // Combined format varsa (video + audio birlikte)
                const combinedStream = data.urls.find(stream => 
                    stream.type === 'combined' || (!stream.type && stream.url)
                );
                
                if (combinedStream) {
                    console.log('Using combined stream:', combinedStream.url);
                    setVideoUrl(combinedStream.url);
                } else if (data.type === 'separate') {
                    // Separate format durumunda - iframe fallback kullan
                    console.log('Separate format detected, falling back to iframe');
                    setStreamFetched(false);
                    setVideoUrl('iframe-fallback');
                } else {
                    // Fallback: ilk stream'i al
                    console.log('Using fallback stream:', data.urls[0].url);
                    setVideoUrl(data.urls[0].url);
                }
            } else {
                console.error('No URLs in response');
                throw new Error('No playable stream found');
            }
            
        } catch (error) {
            console.error('fetchVideoStream error:', error);
            setError(error.message);
            setVideoUrl('iframe-fallback');
        } finally {
            console.log('Setting loading to false');
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log('useEffect triggered:', { isPlaying, videoUrl, loading, videoId, streamFetched });
        
        if (isPlaying && !videoUrl && !loading && !error && !streamFetched && videoId) {
            console.log('Conditions met, calling fetchVideoStream');
            setStreamFetched(true);
            fetchVideoStream();
        }
    }, [isPlaying, videoId]);

    const handlePlay = () => {
        console.log('handlePlay called, current isPlaying:', isPlaying);
        
        if (isPlaying) {
            if (videoRef.current) {
                videoRef.current.pause();
            }
            setIsPlaying(false);
            setStreamFetched(false);
            setVideoUrl(null);
            setError(null);
        } else {
            console.log('Setting isPlaying to true');
            setIsPlaying(true);
            setStreamFetched(false);
        }
        setIsHovering(false);
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
        setVideoUrl(null);
        setStreamFetched(false);
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
            style={reel ? {aspectRatio: '9/16'} : {aspectRatio: '16/9'}}
        >
            {!isPlaying && (
                <SafeImage
                    fill
                    src={img}
                    className={styles.thumb__img}
                    alt="Youtube thumbnail"
                />
            )}

            {isPlaying && (
                <div className={styles.thumb__player}>
                    {/* Debug info */}
                    <div style={{position: 'absolute', top: 0, left: 0, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '5px', fontSize: '12px', zIndex: 1000}}>
                        Debug: loading={loading.toString()}, error={error?.toString()}, videoUrl={videoUrl ? (videoUrl === 'iframe-fallback' ? 'iframe' : 'stream') : 'null'}
                    </div>
                    
                    {loading && (
                        <div className={styles.thumb__loading}>
                            <div className={styles.thumb__spinner}></div>
                            <p>Loading video...</p>
                        </div>
                    )}
                    
                    {error && error !== 'iframe-fallback' && videoUrl !== 'iframe-fallback' && (
                        <div className={styles.thumb__error}>
                            <p>Error: {error}</p>
                            <a 
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.thumb__link}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    )}
                    
                    {videoUrl === 'iframe-fallback' && (
                        <iframe
                            src={`${video}?autoplay=1&rel=0&showinfo=0`}
                            title="YouTube video player"
                            className={styles.thumb__iframe}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    )}
                    
                    {videoUrl && videoUrl !== 'iframe-fallback' && !loading && !error && (
                        <video
                            ref={videoRef}
                            className={styles.thumb__video}
                            controls={false}
                            autoPlay
                            muted
                            playsInline
                            onPlay={handleVideoPlay}
                            onPause={handleVideoPause}
                            onEnded={handleVideoEnded}
                            onError={(e) => {
                                console.error('Video error:', e);
                                console.error('Video error details:', e.target.error);
                                setError('Video playback failed - using iframe');
                                setVideoUrl('iframe-fallback');
                            }}
                            onLoadStart={() => console.log('Video load start')}
                            onLoadedData={() => console.log('Video loaded data')}
                            onCanPlay={() => console.log('Video can play')}
                            onCanPlayThrough={() => console.log('Video can play through')}
                            src={videoUrl}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {!loading && !error && !videoUrl && (
                        <div style={{padding: '20px', color: 'white', textAlign: 'center'}}>
                            No video URL available
                        </div>
                    )}
                </div>
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