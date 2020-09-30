import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const callfun = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    });
    return (
        <div className="ui list">
            {callfun}
        </div>
    )
}

export default VideoList
