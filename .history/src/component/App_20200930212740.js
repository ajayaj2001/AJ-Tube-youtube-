import React, { useState, useEffect } from 'react'
import auth from './auth'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const App = () => {
    const [video, setVideo] = useState([])
    const [select, setSelect] = useState(null)
    useEffect(() => {
        onTermSubmit('pubg')
    }, [])
    const onTermSubmit = async input => {
        const responce = await auth.get('/search', {
            params: {
                q: input
            }
        })
        setSelect(responce.data.items[0])
        setVideo(responce.data.items)
    }
    const onVideoSelect = (video) => {
        setSelect(video)
    }
    return (
        <div className="ui container">
            <SearchBar onsubmit={onTermSubmit} />
                Found:{video.length}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={select} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={video} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
