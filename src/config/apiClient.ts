import axios from "axios";
import type { AuthResponse } from "../model/AuthResponse";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

//interceptors

apiClient.interceptors.request.use(
  (config) => {
    if (!config.url?.includes("/login") && !config.url?.includes("/register")) {
      const authObject = localStorage.getItem("taskUser");
      //console.log("authObject", authObject);

      if (authObject) {
        const { token } = JSON.parse(authObject) as AuthResponse;
        // console.log("token", token);
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
