import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
});
instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

export default instance;
