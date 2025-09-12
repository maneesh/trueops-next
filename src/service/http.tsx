import axios, { AxiosHeaders } from "axios";

const HTTP = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: new AxiosHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
  }),
});

// Request interceptor
HTTP.interceptors.request.use(
  (config) => {
    // Ensure headers is an AxiosHeaders instance
    if (!(config.headers instanceof AxiosHeaders)) {
      config.headers = new AxiosHeaders(config.headers);
    }

    config.headers.set("Content-Type", "application/json");
    config.headers.set("Accept", "application/json");

    // Attach token from localStorage (client) or environment (server)
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : process.env.API_SERVER_TOKEN;

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response && error.message === "Network Error") {
      return Promise.reject({ message: "Couldn't connect to server. Please try again later." });
    } else if (error.response?.data) {
      // Normalize backend error
      return Promise.reject({
        message:
          error.response.data.message ||
          error.response.data.error ||
          "Unknown server error",
        status: error.response.status,
      });
    } else {
      return Promise.reject({ message: "Server Connection Failed" });
    }
  }
);





export default HTTP;
