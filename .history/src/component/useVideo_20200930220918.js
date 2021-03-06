import React, { useState, useEffect } from 'react'
import auth from './auth'
const useVideo = ({ defaultSearch }) => {
    const [video, setVideo] = useState([])
    useEffect(() => {
        onTermSubmit(defaultSearch)
    }, [])
    const onTermSubmit = async input => {
        const responce = await auth.get('/search', {
            params: {
                q: input
            }
        })

        setVideo(responce.data.items)
    }
    return { video, onTermSubmit }
}

export default useVideo
