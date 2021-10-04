import axios from 'axios';
import instance from './axios';

export const UserLogin = (userinfo) => instance.post('/api/login', userinfo);

export const loadPostAPI = () => instance.get('/api/post');

export const CreatePostApi = (list) => instance.post('/api/post', list);
