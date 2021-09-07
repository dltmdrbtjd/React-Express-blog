import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
})

instance.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json; charset=utf-8';
  request.headers['X-Requested-With'] = 'XMLHttpRequest';

  return request;
})

export default instance;