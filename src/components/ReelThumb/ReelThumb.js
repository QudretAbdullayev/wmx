'use client';

import { useState } from 'react';
import SafeImage from '@/components/SafeImage/SafeImage';
import styles from './ReelThumb.module.scss';

const ReelThumb = ({ video, img }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
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
                            src="/icons/btn-video.png"
                            width={60}
                            height={60}
                            alt="Play button"
                        />
                    </button>
                </>
            )}

            {isPlaying && (
                <iframe
                    src={`${video}?autoplay=1&rel=0&showinfo=0`}
                    title="Reel video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default ReelThumb;
