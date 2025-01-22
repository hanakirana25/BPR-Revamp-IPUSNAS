// Constants
import { NOTIFICATION_ENDPOINT_GET, BASE_URL } from '../constants';

// Interfaces
import { AxiosError, AxiosRequestConfig } from 'axios';
import {
    INotificationResponse,
    INotificationStateStore,
} from '../interfaces';

// Plugins
import httpClient from '@/plugins/axios';

// Pinia
import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: (): INotificationStateStore => ({
      notification_isLoading: false,
    }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Handle fetch api authentication login.
     * @url /authentication/login
     * @method GET
     * @access public
     */
    async fetchNotification(
      requestConfigurations: AxiosRequestConfig,
    ): Promise<INotificationResponse> {
      this.notification_isLoading = true;

      try {
        const response = await httpClient.get<INotificationResponse>(`${BASE_URL}${NOTIFICATION_ENDPOINT_GET}`, {
          ...requestConfigurations,
        });

        console.log('fetch', response.data)

        return Promise.resolve(response.data);
      } catch (err: unknown) {
        const error = err as AxiosError;

        return Promise.reject(error);
      } finally {
        this.notification_isLoading = false;
      }
    },

  },
  persist: {
    key: 'authentication',
    pick: ['authentication_token'],
    storage: sessionStorage,
  },
});
