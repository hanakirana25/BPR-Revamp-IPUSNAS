// Enumerations
import { EDialogConfirmationType } from '../interfaces';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useBookDetail = () => {
  /**
   * @description Injected variables
   */
  // Please put your injected variables here

  /**
   * @description Constant variables
   */
  // Please put your constant variables here

  /**
   * @description Reactive data binding
   */
  const bookDetail_isOpenDialogConfirmation = ref<boolean>(false);
  const bookDetail_typeOfDialogConfirmation = ref<EDialogConfirmationType>(EDialogConfirmationType.BORROW);

  /**
   * @description Handle side effect when reactive data binding is changed
   */
  // Please put your side effect here

  /**
   * @description Handle business logic for handling event button cancel
   */
  const bookDetail_onCancel = (): void => {
    bookDetail_isOpenDialogConfirmation.value = false;
  };

  /**
   * @description Handle business logic for handling dynamic event of button primary
   */
  const bookDetail_onClickPrimaryButton = (): void => {
    switch (bookDetail_typeOfDialogConfirmation.value) {
      case EDialogConfirmationType.BORROW:
        alert('Borrow');
        // Please put your business logic here
        break;
      case EDialogConfirmationType.QUEUE:
        alert('Queue');
        // Please put your business logic here
        break;
      case EDialogConfirmationType.RENEW:
        alert('Renew');
        // Please put your business logic here
        break;
      case EDialogConfirmationType.RETURN:
        alert('Return');
        // Please put your business logic here
        break;
      default:
        break;
    }
  };

  /**
   * @description Handle business logic for handling event button queue
   */
  const bookDetail_onQueue = (): void => {
    bookDetail_isOpenDialogConfirmation.value = true;
    bookDetail_typeOfDialogConfirmation.value = EDialogConfirmationType.QUEUE;
  };

  /**
   * @description Return everything what we need into an object
   */
  return {
    bookDetail_isOpenDialogConfirmation,
    bookDetail_onCancel,
    bookDetail_onClickPrimaryButton,
    bookDetail_onQueue,
    bookDetail_typeOfDialogConfirmation,
  };
};
