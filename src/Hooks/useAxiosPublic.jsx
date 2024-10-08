import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.admissionbus.com",
});

const useAxiosPublic = () => {
  // axiosInstance.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       config.headers["Authorization"] = "Bearer " + token;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     Promise.reject(error);
  //   }
  // );
  return axiosInstance;
};

export default useAxiosPublic;
