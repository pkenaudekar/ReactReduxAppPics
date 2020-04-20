import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7TCsp4k_ljSeWwFrmkcrIQUihg_iS5GZEjVPfmq9mlE'
    }
});