import axios from 'axios'
const KEY = "AIzaSyAbCN4XoQzXzB-Aw_pos7gLsUogwGX_vrs";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

})