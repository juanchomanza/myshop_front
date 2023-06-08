import deafultAxios from 'axios';

const axios = () => deafultAxios.create({
    baseURL: 'https://ecommercegood.onrender.com',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axios;