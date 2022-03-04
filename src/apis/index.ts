import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// For GET requests
api.interceptors.request.use(
  (req) => {
    // Add configurations here
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// For POST requests
api.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (res.status === 201) {
      console.log("Posted Successfully");
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
