import axios from 'axios';
import instance from './axios';

export const UserLogin = (userinfo) => instance.post('/api/login', userinfo);

export const loadPostAPI = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};
