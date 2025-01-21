// Constants
import { AUTHENTICATION_ENDPOINT_LOGIN, AUTHENTICATION_ENDPOINT_SIGN_UP } from '../constants';

// Interfaces
import { AxiosError, AxiosRequestConfig } from 'axios';
import {
  IAuthenticationLoginPayload,
  IAuthenticationResponse,
  IAuthenticationSignUpPayload,
  IAuthenticationStateStore,
} from '../interfaces';

// Plugins
import httpClient from '@/plugins/axios';

// Pinia
import { defineStore } from 'pinia';

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationStateStore => ({
    authentication_isLoading: false,
    authentication_token: '',
    authentication_userData: null,
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
     * @method POST
     * @access public
     */
    async fetchAuthentication_login(
      payload: IAuthenticationLoginPayload,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IAuthenticationResponse> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.post<IAuthenticationResponse>(AUTHENTICATION_ENDPOINT_LOGIN, payload, {
          ...requestConfigurations,
        });
        this.authentication_token = response.data.token;

        return Promise.resolve(response.data);
      } catch (err: unknown) {
        const error = err as AxiosError;

        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },

    /**
     * @description Handle fetch api authentication sign-up.
     * @url /authentication/register
     * @method POST
     * @access public
     */
    async fetchAuthentication_signUp(
      payload: IAuthenticationSignUpPayload,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IAuthenticationResponse> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.post<IAuthenticationResponse>(AUTHENTICATION_ENDPOINT_SIGN_UP, payload, {
          ...requestConfigurations,
        });
        this.authentication_token = response.data.token;

        return Promise.resolve(response.data);
      } catch (err: unknown) {
        const error = err as AxiosError;

        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },
  },
  persist: {
    key: 'authentication',
    pick: ['authentication_token'],
    storage: sessionStorage,
  },
});
