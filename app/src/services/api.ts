import axios from 'axios';

const baseURL = 'http://b22caa68d55e.ngrok.io/v1'

const api = axios.create({
    baseURL
})

export default api;