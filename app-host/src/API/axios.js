import axios from "axios";

let API = axios.create({
  baseURL: "http://localhost:4000/" + "/",
});

// API.interceptors.request.use((config) => {
//   let token = localStorage.getItem("tokens");
//   config.headers.Authorization = token;
//   return config;
// });

export default API;