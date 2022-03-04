import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://api.github.com",
  withCredentials: false,
});
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error.response)
);
export default axios;
