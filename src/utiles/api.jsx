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

// const coloredLog = (text, color) => {
//   console.log(`%c${text}`, `color: ${color}`);
// };

// const post = async (endpoint, data) => {
//   const bodyData = JSON.stringify(data);
//   console.log(`%cPOST 요청: ${API.defaults.baseURL + endpoint}`, "color: #296aba;");
//   try {
//     const response = await API.post(endpoint, bodyData);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error.response);
//     throw error;
//   }
// };
// async function post(endpoint, data) {
//   const bodyData = JSON.stringify(data);
//   console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
//   endpoint === "users/logout" || endpoint === "users/login"
//     ? console.log(`%cPOST 요청 데이터: 비밀입니다 찡긋 ;)`, "color: #296aba;")
//     : console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

//   return API
//     .post(serverUrl + endpoint, bodyData, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//     .catch((err) => err.response);
// }
// const get = async (url) => {
//   try {
//     const response = await API.get(url);
//     coloredLog(response.data, "green");
//     return response.data;
//   } catch (error) {
//     coloredLog(error, "red");
//     throw error;
//   }
// };

// const patch = async (url, data) => {
//   try {
//     const response = await API.patch(url, data);
//     coloredLog(response.data, "green");
//     return response.data;
//   } catch (error) {
//     coloredLog(error, "red");
//     throw error;
//   }
// };

export default API;
