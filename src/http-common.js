import axios from "axios";

// baseURL: "https://retoolapi.dev/t9f3Bh",

// Account
export default axios.create({
  // baseURL: "http://192.168.1.68:3001",
  // baseURL: "https://Nodejsproject.ramchandrathap1.repl.co",
  baseURL: "http://127.0.0.1:3001",
  // baseURL: "https://af07-103-232-154-16.in.ngrok.io",
  // baseURL: "https://c16d-103-232-154-16.in.ngrok.io",
  // baseURL: "https://63b90d7c3329392049eab761.mockapi.io/v1/",
  headers: {
    "Content-type": "application/json"
  }
});
