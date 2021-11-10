import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bible-api.com',

  headers: {
    Accept: 'application/json',
  },
});

export const ChooseBook = data => {
  return axiosInstance.get(`jn%203:16`, data);
};

export const Favorite = data => {
  return axiosInstance.get(`romans+12:1-2`, data);
};
