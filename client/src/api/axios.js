import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
  withCredentials: true,
});

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized - could be expired token
      console.warn('Session expired or unauthorized. Redirecting to login...');
      // Note: We can't use useNavigate here, but we can clear local state or use window.location if necessary
      // For now, just let the component handle the toast error
    }
    return Promise.reject(error);
  }
);

export default instance;
