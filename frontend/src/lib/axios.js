import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000', // Use environment variable or fallback to localhost
  withCredentials: true, // Allow sending cookies with requests automatically 

});

export default axiosInstance;