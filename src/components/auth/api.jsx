// api.js (or wherever you handle API calls)
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"; // Your API base URL

export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/jwt/refresh/`, {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};
