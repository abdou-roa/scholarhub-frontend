// utils/auth.js
import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('/token/', { username, password });
    const { access } = response.data;
    Cookies.set('token', access);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail);
  }
};

export const logout = () => {
  Cookies.remove('token');
};

export const isAuthenticated = () => {
  const token = Cookies.get('token');
  return !!token;
};
