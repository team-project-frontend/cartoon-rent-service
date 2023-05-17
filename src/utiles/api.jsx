import axios from "axios";

const axiosConfig = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://test-xtcj6il6hq-du.a.run.app`
      : `https://test-xtcj6il6hq-du.a.run.app`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },

  withCredentials: true,
};

const API = axios.create(axiosConfig);

export default API;
