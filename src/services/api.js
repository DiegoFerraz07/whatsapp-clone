import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../themes/constants';
import notifyMessage from '../themes/utils';

let mainRequest = null;

const api = axios.create({
  baseURL: BASE_URL,
  handlerEnabled: true,
});

api.interceptors.request.use(async (config) => {
  mainRequest = config;
  const token = await AsyncStorage.getItem("@token");
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  config.params = { ...config.params};
  return config;
});

api.interceptors.response.use(
  async (response) => {
    console.log('response: ', response.data);
    const { success, message } = response.data;
    if (!success) {
      var alertMessage = 'Your session has expired. Please login again.';
      if(message) {
        alertMessage = message;
      }
      if(!response.config.url.includes('verify-token'))
        notifyMessage(alertMessage);

    }
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error: ', error);
    const { status } = error.response;
    if (status === 500 || status === 504) {
      notifyMessage('Something went wrong. Please try again later.');
    } else if(status === 401) {
      notifyMessage('Your session has expired. Please login again.');
    } else if(status === 0) {
      notifyMessage('Timeout. Please try again later.');
    }
    return Promise.reject(error);
  },
);

export default api;
