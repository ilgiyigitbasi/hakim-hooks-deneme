import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET
export const get = (url, params) => {
  console.log("url:" + url);
  return http.get(url, { params });
};

// POST
export const post = (url, data) => {
  return http.post(url, data);
};

// PUT
export const put = (url, data) => {
  return http.put(url, data);
};

// DELETE
export const remove = (url) => {
  return http.delete(url);
};
