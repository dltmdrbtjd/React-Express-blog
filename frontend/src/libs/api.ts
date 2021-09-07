import axios from './axios';

export const UserLogin = (userinfo) => axios.post('/api/login', userinfo);