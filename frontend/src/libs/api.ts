import instance from './axios';

export const UserLogin = (userinfo) => instance.post('/api/login', userinfo);

export const loadPostAPI = () => instance.get('/api/post');

export const CreatePostApi = (list) => instance.post('/api/post', list);

export const DetailPostApi = (postId) => instance.get(`/api/post/${postId}`);
