import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: '/api', // This will be proxied to http://localhost:5000/api
});

/*
  This interceptor will add the user's token to the
  'Authorization' header of every request *after* they log in.
*/
api.interceptors.request.use((config) => {
  // Get user info from local storage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo && userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return config;
});

export default api;