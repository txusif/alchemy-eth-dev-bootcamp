import axios from "axios";

const server = axios.create({
  // baseURL: "http://localhost:3042",
  baseURL: "https://ecdsa.onrender.com/"
});

export default server;
