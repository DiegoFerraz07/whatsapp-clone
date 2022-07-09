import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../themes/constants';

let mainRequest = null;

const api = axios.create({
  baseURL: BASE_URL,
  handlerEnabled: true,
});

api.interceptors.request.use(async (config) => {
  mainRequest = config;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU3NDAyMTAwLCJleHAiOjE2NTc0MDU3MDB9.JJe64QH25R7gRkWoyMcukXAVAbyC5TDt114RLrdaDS0';//await Storage.getAccessToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';

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
      Alert.alert(
        'Oops',
        alertMessage,
      );
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
        Alert.alert(
            'Oops',
            'Something went wrong. Please try again later.',
        );
    }
    return Promise.reject(error);
  },
);

export default api;
