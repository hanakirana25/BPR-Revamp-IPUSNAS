<template>
  <section id="dialog-confirmation">
    <Drawer
      v-model:visible="localValueIsOpen"
      position="bottom"
      style="height: auto"
      :show-close-icon="false"
      :pt="{
        header: '!hidden',
        root: '!bg-white rounded-tl-3xl rounded-tr-3xl',
      }"
    >
      <template #default>
        <section id="drawer-body" class="bg-white flex flex-col items-center gap-6 pt-4 w-full">
          <img :src="dynamicIllustration" alt="book" />

          <section id="content" class="flex flex-col items-center gap-2">
            <h6 class="font-semibold leading-7 text-black text-lg tracking-[0.18px]">
              {{ dynamicTitle }}
            </h6>

            <template
              v-if="props.type === EDialogConfirmationType.RENEW || props.type === EDialogConfirmationType.RETURN"
            >
              <p class="leading-7 text-muted text-center text-sm tracking-[0.28px]">
                {{ dynamicDescription }}
              </p>
            </template>
          </section>

          <section id="btn-actions" class="flex items-center gap-4 w-full">
            <Button
              class="!bg-secondary border-none font-bold font-neue-text-pro h-[52px] text-center !text-primary text-sm p-4 rounded-md [&>span]:text-sm w-full"
              label="Cancel"
              size="large"
              @click="props.onClickSecondaryButton"
            />

            <Button
              class="bg-primary font-bold font-neue-text-pro h-[52px] text-center text-sm text-white p-4 rounded-md [&>span]:text-sm w-full"
              :label="primaryButtonLabel"
              size="large"
              @click="props.onClickPrimaryButton"
            />
          </section>
        </section>
      </template>
    </Drawer>
  </section>
</template>

<script setup lang="ts">
// Enumerations
import { EDialogConfirmationType } from '../interfaces';

// Illustrations
import IllustrationOfBorrowBook from '@/app/assets/illustrations/borrow-book.svg';
import IllustrationOfQueueBook from '@/app/assets/illustrations/queue-book.svg';
import IllustrationOfReturnBook from '@/app/assets/illustrations/return-book.svg';
import IllustrationOfRenewBook from '@/app/assets/illustrations/renew-book.svg';

/**
 * @description Interface of props component
 */
interface IProps {
  isOpen: boolean;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
  type: EDialogConfirmationType;
}

/**
 * @description Define props with default values and types
 */
const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
  onClickPrimaryButton: () => {},
  onClickSecondaryButton: () => {},
  type: EDialogConfirmationType.BORROW,
});

/**
 * @description Define event emitter
 */
const emits = defineEmits(['update:isOpen']);

/**
 * @description Handle dynamic value of drawer
 */
const localValueIsOpen: ComputedRef<boolean> = computed({
  get: () => props.isOpen,
  set: value => {
    emits('update:isOpen', value);
  },
});

/**
 * @description Handle dynamic description of dialog
 */
const dynamicDescription: ComputedRef<string> = computed(() => {
  switch (props.type) {
    case EDialogConfirmationType.RENEW:
      return 'You can renew this book once, adding 5 days to your borrowing period. To borrow the book again after that, you must return it first.';
    case EDialogConfirmationType.RETURN:
      return 'You need to borrow this book again if you want to access it.';
    default:
      return '';
  }
});

/**
 * @description Handle dynamic illustration of dialog
 */
const dynamicIllustration: ComputedRef<string> = computed(() => {
  switch (props.type) {
    case EDialogConfirmationType.BORROW:
      return IllustrationOfBorrowBook;
    case EDialogConfirmationType.QUEUE:
      return IllustrationOfQueueBook;
    case EDialogConfirmationType.RETURN:
      return IllustrationOfReturnBook;
    case EDialogConfirmationType.RENEW:
      return IllustrationOfRenewBook;
    default:
      return IllustrationOfBorrowBook;
  }
});

/**
 * @description Handle dynamic title of dialog
 */
const dynamicTitle: ComputedRef<string> = computed(() => {
  switch (props.type) {
    case EDialogConfirmationType.BORROW:
      return 'Available book quantity: 1 copy.';
    case EDialogConfirmationType.QUEUE:
      return 'Add this book to your waiting list?';
    case EDialogConfirmationType.RETURN:
      return 'Would you like to return this book?';
    case EDialogConfirmationType.RENEW:
      return 'Would you like to renew this book?';
    default:
      return '';
  }
});

/**
 * @description Handle dynamic label of primary button
 */
const primaryButtonLabel: ComputedRef<string> = computed(() => {
  switch (props.type) {
    case EDialogConfirmationType.BORROW:
      return 'Yes, borrow';
    case EDialogConfirmationType.QUEUE:
      return 'Yes, queue';
    case EDialogConfirmationType.RETURN:
      return 'Return';
    case EDialogConfirmationType.RENEW:
      return 'Renew';
    default:
      return 'Yes';
  }
});
</script>
