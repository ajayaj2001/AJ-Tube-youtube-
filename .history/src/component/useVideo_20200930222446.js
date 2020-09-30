import React, { useState, useEffect } from 'react'
import auth from './auth'
const useVideo = (defaultSearch) => {
    const [video, setVideo] = useState([])
    useEffect(() => {
        Search(defaultSearch)
    }, [])
    const Search = async input => {
        const responce = await auth.get('/search', {
            params: {
                q: input
            }
        })

        setVideo(responce.data.items)
    }
    return [video, Search]
}

export default useVideo
