// Axios
import axios, { type InternalAxiosRequestConfig, type AxiosInstance, type AxiosError } from 'axios';

// Constants
import { EToastPosition, EToastType } from '@/app/constants/toast.constant';

// Mitt
import eventBus from '../mitt';

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL ? `${import.meta.env.VITE_APP_BASE_API_URL}` : '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

httpClient.interceptors.response.use(undefined, (error: AxiosError<{ error?: string; message?: string }>) => {
  /**
   * @description Here's we can handle various errors.
   */
  switch (error.response?.status) {
    case 400:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        title: error.response?.data?.message ?? 'Bad Request',
        message: error.response?.data?.error,
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    case 401:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        title: error.response?.data?.message ?? 'Unauthorized',
        message: error.response?.data?.error,
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    case 500:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        title: error.response?.data?.message ?? 'Internal Server Error',
        message: error.response?.data?.error,
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    default:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        title: error.response?.data?.message ?? 'Something went wrong',
        message: error.response?.data?.error,
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
  }

  return Promise.reject(error);
});

export default httpClient;
