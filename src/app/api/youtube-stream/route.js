import ytdl from '@distube/ytdl-core';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const videoId = searchParams.get('videoId');

        if (!videoId) {
            return Response.json({ error: 'Video ID is required' }, { status: 400 });
        }

        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        
        // Önce YouTube Data API ile metadata al (isteğe bağlı)
        let videoMetadata = null;
        if (API_KEY) {
            try {
                const metadataResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails`
                );
                const metadataData = await metadataResponse.json();
                if (metadataData.items && metadataData.items.length > 0) {
                    videoMetadata = metadataData.items[0];
                }
            } catch (metadataError) {
                console.log('YouTube Data API failed, using ytdl metadata:', metadataError.message);
            }
        }

        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        
        // Anti-bot agent kullan
        const agent = ytdl.createAgent();
        
        // Video bilgilerini al - daha fazla seçenek ile
        const info = await ytdl.getInfo(videoUrl, { 
            agent,
            requestOptions: {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            }
        });
        
        // Mevcut formatları al - önce lower quality'yi dene
        let formats = ytdl.filterFormats(info.formats, 'videoandaudio');
        
        // Eğer combined format yoksa, daha düşük kalite dene
        if (formats.length === 0) {
            formats = info.formats.filter(format => 
                format.hasVideo && format.hasAudio && 
                (format.quality === 'medium' || format.quality === 'small')
            );
        }
        
        if (formats.length === 0) {
            // Combined format yoksa separate formatları dene
            const videoFormats = ytdl.filterFormats(info.formats, 'video');
            const audioFormats = ytdl.filterFormats(info.formats, 'audio');
            
            return Response.json({
                title: videoMetadata?.snippet?.title || info.videoDetails.title,
                duration: videoMetadata?.contentDetails?.duration || info.videoDetails.lengthSeconds,
                description: videoMetadata?.snippet?.description || info.videoDetails.description,
                thumbnail: videoMetadata?.snippet?.thumbnails?.high?.url || info.videoDetails.thumbnails?.[0]?.url,
                channelTitle: videoMetadata?.snippet?.channelTitle || info.videoDetails.author?.name,
                type: 'separate',
                urls: [
                    ...videoFormats.slice(0, 1).map(format => ({
                        url: format.url,
                        quality: format.qualityLabel || format.quality,
                        mimeType: format.mimeType,
                        type: 'video'
                    })),
                    ...audioFormats.slice(0, 1).map(format => ({
                        url: format.url,
                        quality: 'audio',
                        mimeType: format.mimeType,
                        type: 'audio'
                    }))
                ]
            });
        }

        // Combined formatları quality'ye göre sırala
        const sortedFormats = formats.sort((a, b) => {
            const qualityA = parseInt(a.qualityLabel) || 0;
            const qualityB = parseInt(b.qualityLabel) || 0;
            return qualityB - qualityA;
        });

        return Response.json({
            title: videoMetadata?.snippet?.title || info.videoDetails.title,
            duration: videoMetadata?.contentDetails?.duration || info.videoDetails.lengthSeconds,
            description: videoMetadata?.snippet?.description || info.videoDetails.description,
            thumbnail: videoMetadata?.snippet?.thumbnails?.high?.url || info.videoDetails.thumbnails?.[0]?.url,
            channelTitle: videoMetadata?.snippet?.channelTitle || info.videoDetails.author?.name,
            type: 'combined',
            urls: sortedFormats.slice(0, 3).map(format => ({
                url: format.url,
                quality: format.qualityLabel || format.quality,
                mimeType: format.mimeType,
                type: 'combined'
            }))
        });

    } catch (error) {
        console.error('YouTube API Error:', error);
        return Response.json({ 
            error: 'Failed to fetch video stream',
            details: error.message 
        }, { status: 500 });
    }
}