/* eslint-disable no-undef */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
})
instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${window.localStorage.getItem("token") ? window.localStorage.getItem("token").replace(/"/g, "") : ""}`;

export default instance
