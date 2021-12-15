import axios from 'axios';

const KEY = 'AIzaSyChcq_PWFDoAtcKFLlBLuddSUMqp1jd4Kw';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

