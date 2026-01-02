import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/";
const baseURLSSR = process.env.API_BASE_URL || "http://localhost:8000/";
const snowBaseURL = process.env.NEXT_PUBLIC_SNOW_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiClientSSR = axios.create({
  baseURL: baseURLSSR,
  headers: {
    "Content-Type": "application/json",
  },
});

export const snowApiClient = axios.create({
  baseURL: snowBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Optional: attach interceptors for auth / logging as needed
// apiClient.interceptors.request.use((config) => {
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );
