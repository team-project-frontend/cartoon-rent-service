import axios from "axios";

const axiosConfig = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000`
      : `운영서버api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const API = axios.create(axiosConfig);

export default API;
