import axios from 'axios';

const api = axios.create({
    basseURL: 'http://localhost:3333'
});

export default api;