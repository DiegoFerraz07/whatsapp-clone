import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../themes/constants';
import notifyMessage from '../themes/utils';

let mainRequest = null;

const api = axios.create({
  baseURL: BASE_URL,
  handlerEnabled: true,
});

api.interceptors.request.use(async (config) => {
  mainRequest = config;
  config.params = { ...config.params};
  return config;
});

api.interceptors.response.use(
  async (response) => {
    const { success, message } = response.data;
    if (!success) {
      var alertMessage = 'Your session has expired. Please login again.';
      if(message) {
        alertMessage = message;
      }
      notifyMessage(alertMessage);
      throw new axios.Cancel();
    }
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error: ', error.response);
    const { status } = error.response;
    if (status === 500 || status === 504) {
        notifyMessage('Something went wrong. Please try again later.');
    }
    return Promise.reject(error);
  },
);

export default api;
