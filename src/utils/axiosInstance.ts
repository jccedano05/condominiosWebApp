// axiosInstance.js
import axios from "axios";
import { URL_BACKEND_PATH_DEV } from "./envVariables";

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return "";
  }
};

const instance = axios.create({
  baseURL: URL_BACKEND_PATH_DEV,
  timeout: 10000, // Tiempo de espera para las peticiones (en milisegundos)
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default instance;
