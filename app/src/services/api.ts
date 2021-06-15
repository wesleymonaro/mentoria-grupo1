import axios from 'axios';

const baseURL = 'http://7895d626e62a.ngrok.io/v1'

const api = axios.create({
    baseURL
})

export default api;