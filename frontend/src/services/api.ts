import axios from "axios";

// Determine API URL based on environment
let apiUrl = import.meta.env.VITE_API_URL;

// In production with Docker, use the same host but different port
if (window.location.hostname !== "localhost" && !apiUrl.includes(window.location.hostname)) {
  // Replace with current hostname but keep the port from env if specified
  const port = 4000; // Default API port in production
  apiUrl = `${window.location.protocol}//${window.location.hostname}:${port}`;
}

const api = axios.create({
  baseURL: `${apiUrl}/api`,
});

export default api;
