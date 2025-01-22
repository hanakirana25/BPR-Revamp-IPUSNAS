// Axios
import { AxiosError } from 'axios';

// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import { NOTIFICATION_LOGIN_REQUEST } from '../constants';
import { EToastPosition, EToastType } from '@/app/constants/toast.constant';

// Interfaces
import { INotificationResponse } from '../interfaces';

// Mitt
import eventBus from '@/plugins/mitt';

// Store / Pinia
import { useNotificationStore } from '../store';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useAuthenticationLoginService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const store = useNotificationStore(); // Instance of the store
  const router = useRouter(); // Instance of the router

  /**
   * @description Reactive data binding
   */
  const notification_isLoading: boolean = store.notification_isLoading;
//   const authenticationLogin_formData: IAuthenticationLoginPayload = reactive<IAuthenticationLoginPayload>({
//     email: '',
//     password: '',
//   });

  /**
   * @description Form validations
   */
//   const authenticationLogin_formRules: ComputedRef = computed(() => ({
//     email: { email, required },
//     password: { required },
//   }));
//   const authenticationLogin_formValidations = useVuelidate(
//     authenticationLogin_formRules,
//     authenticationLogin_formData,
//     {
//       $autoDirty: true,
//     },
//   );

  /**
   * @description Handle fetch api authentication login. We call the fetchAuthenticationLogin function from the store to handle the request.
   */
  const notification_fetchNotification = async (): Promise<unknown> => {
    try {
      const result = await store.fetchNotification( {
        ...httpAbort_registerAbort(NOTIFICATION_LOGIN_REQUEST),
      });

      eventBus.emit('AppBaseToast', {
        isOpen: true,
        title: 'Success',
        message: 'You have successfully fetched in.',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.SUCCESS,
      });

      setTimeout(() => {
        router.push({ name: 'user-interest' });
      }, 1000);

      return Promise.resolve(result);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return Promise.reject(error);
    }
  };

  return {

  };
};
