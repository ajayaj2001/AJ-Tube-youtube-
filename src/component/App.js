import React, { useState, useEffect } from 'react'

import SearchBar from './SearchBar'
import useVideo from './useVideo'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const App = () => {

    const [select, setSelect] = useState(null)
    const [video, Search] = useVideo("pubg")
    useEffect(() => {
        setSelect(video[0])
    }, [video])

    return (
        <div className="ui container">
            <SearchBar onsubmit={Search} />
                Found:{video.length}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={select} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelect} videos={video} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
