import React from 'react'
import './VideoItem.css'
const VideoItem = ({ video, onVideoSelect }) => {
    return (

        <div onClick={() => { onVideoSelect(video) }} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <a className="header" href="#home" >{video.snippet.title}</a>
                <div className="description">Created_At:{video.snippet.publishedAt}</div>
                <hr></hr>
            </div>
        </div>
    )
}

export default VideoItem
