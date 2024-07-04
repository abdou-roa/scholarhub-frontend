// utils/fetcher.js
import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';

// Function to handle API requests
export const fetcher = async (url, options = {}) => {
  try {
    // Default options for Axios
    const defaultOptions = {
      method: 'GET',
      ...options,
    };

    // Making the request using the Axios instance
    const response = await axiosInstance(url, defaultOptions);
    return response.data;
  } catch (error) {
    // Handle errors, e.g., redirect to login if unauthorized
    if (error.response) {
      if (error.response.status === 401) {
        Cookies.remove('token'); // Remove token if it's invalid or expired
        window.location.href = '/auth/login'; // Redirect to login page
      } else {
        throw new Error(error.response.data.detail || 'API request failed');
      }
    } else {
      throw new Error(error.message || 'API request failed');
    }
  }
};
