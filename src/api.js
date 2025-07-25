import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Thay bằng URL backend thực tế của bạn
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để tự động thêm token vào header nếu có
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api; 