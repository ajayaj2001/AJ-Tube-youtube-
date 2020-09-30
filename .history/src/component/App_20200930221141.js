import React, { useState, useEffect } from 'react'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const App = () => {

    const [select, setSelect] = useState(null)
    setSelect(responce.data.items[0])

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
                        <VideoList onVideoSelect={setSelect} videos={video} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
