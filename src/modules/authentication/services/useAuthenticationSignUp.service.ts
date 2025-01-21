// Axios
import { AxiosError } from 'axios';

// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import { AUTHENTICATION_SIGNUP_REQUEST } from '../constants';
import { EToastPosition, EToastType } from '@/app/constants/toast.constant';

// Interfaces
import { IAuthenticationSignUpPayload } from '../interfaces';

// Mitt
import eventBus from '@/plugins/mitt';

// Store / Pinia
import { useAuthenticationStore } from '../store';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { email, required, sameAs } from '@vuelidate/validators';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useAuthenticationSignUpService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const store = useAuthenticationStore(); // Instance of the store
  const router = useRouter(); // Instance of the router

  /**
   * @description Reactive data binding
   */
  const authenticationSignUp_formData: IAuthenticationSignUpPayload = reactive<IAuthenticationSignUpPayload>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const authenticationSignUp_isAgree: Ref<boolean> = ref<boolean>(false);
  const authenticationSignUp_isLoading: boolean = store.authentication_isLoading;

  /**
   * @description Form validations
   */
  const authenticationSignUp_formRules: ComputedRef = computed(() => ({
    email: { email, required },
    username: { required },
    password: { required },
    confirmPassword: { required, sameAs: sameAs(authenticationSignUp_formData.password) },
  }));
  const authenticationSignUp_formValidations = useVuelidate(
    authenticationSignUp_formRules,
    authenticationSignUp_formData,
    {
      $autoDirty: true,
    },
  );

  /**
   * @description Handle fetch api authentication sign up. We call the fetchAuthentication_signUp function from the store to handle the request.
   */
  const authenticationSignUp_fetchAuthenticationSignUp = async (): Promise<unknown> => {
    try {
      const result = await store.fetchAuthentication_signUp(authenticationSignUp_formData, {
        ...httpAbort_registerAbort(AUTHENTICATION_SIGNUP_REQUEST),
      });

      eventBus.emit('AppBaseToast', {
        isOpen: true,
        title: 'Success',
        message: 'You have successfully signed up.',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.SUCCESS,
      });

      setTimeout(() => {
        router.push({ name: 'login' });
      }, 1000);

      return Promise.resolve(result);
    } catch (err: unknown) {
      const error = err as AxiosError;

      return Promise.reject(error);
    }
  };

  /**
   * @description Handle action on submit form.
   */
  const authenticationSignUp_onSubmit = async (): Promise<void> => {
    authenticationSignUp_formValidations.value.$touch();
    if (authenticationSignUp_formValidations.value.$invalid) return;

    try {
      await authenticationSignUp_fetchAuthenticationSignUp();
    } catch (err: unknown) {
      const error = err as AxiosError;

      return Promise.reject(error);
    }
  };

  return {
    authenticationSignUp_abortAllRequest: httpAbort_abortAllRequest,
    authenticationSignUp_formData,
    authenticationSignUp_formValidations,
    authenticationSignUp_isAgree,
    authenticationSignUp_isLoading,
    authenticationSignUp_onSubmit,
  };
};
