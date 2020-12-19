import axios from 'axios';

const KEY = 'AIzaSyBXdxgQa02piqItYQZp-A0vrpz7qTRlGKE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }

});