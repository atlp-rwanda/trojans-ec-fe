/* eslint-disable no-undef */
import io from "socket.io-client";
const token = localStorage.getItem("token");
export let socket = io(`${process.env.APP_URL}`, {
    extraHeaders: {
    token:`${token}`,
  },
});