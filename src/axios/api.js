import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET
export const get = (url, params) => {
  return http.get(BASE_URL + url, { params });
};

// POST
export const post = (url, data) => {
  return http.post(BASE_URL + url, data);
};

// PUT
export const put = (url, data) => {
  return http.put(BASE_URL + url, data);
};

// DELETE
export const remove = (url) => {
  return http.delete(BASE_URL + url);
};
