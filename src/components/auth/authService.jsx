// authService.js
import axios from 'axios';

// Adjust the base URL as needed
const baseURL = 'http://127.0.0.1:8000';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${baseURL}/auth/jwt/create`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (username, password, rePassword) => {
    try {
      const response = await axios.post(`${baseURL}/auth/users/`, {
        username,
        password,
        re_password: rePassword,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${baseURL}/auth/jwt/refresh`, {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
    localStorage.removeItem('jwtToken');
}

// You can also add functions for registration and logout if needed
// Example:
// export const register = async (username, password, re_password) => { ... }
// export const logout = () => { ... }
