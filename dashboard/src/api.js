// import axios from 'axios';

// const api = axios.create({
//   // baseURL: 'http://localhost:3002/api',
//     baseURL: "https://stock-trading-platform-1-x4tx.onrender.com/api",
//   import axios from "axios";



// export default API;
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


// import axios from "axios";
import axios from "axios";

const api = axios.create({
  baseURL: "https://stock-trading-platform-1-x4tx.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;