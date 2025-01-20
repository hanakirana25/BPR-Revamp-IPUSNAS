<template>
  <section id="book-detail" class="relative inset-0 z-0 flex flex-col gap-2 px-8 pt-8 pb-24">
    <HeaderAndOverview />
    <BookOverview />
    <ImportantMessage />
    <BookSysnopsis />
    <DialogConfirmation
      v-model:is-open="bookDetail_isOpenDialogConfirmation"
      :type="bookDetail_typeOfDialogConfirmation"
      v-on:click-secondary-button="bookDetail_onCancel"
      v-on:click-primary-button="bookDetail_onClickPrimaryButton"
    />

    <section
      id="bottom-btn-actions"
      class="fixed bottom-0 left-0 px-6 py-4 z-[1] bg-white shadow-custom-bottom-navbar w-full"
    >
      <Button
        class="!bg-custom-orange !border-custom-orange font-bold font-neue-text-pro h-[52px] w-full leading-5 text-center text-sm !text-white p-4 rounded-md [&>span]:text-sm"
        label="Queue"
        size="large"
        @click="bookDetail_onQueue"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
// Components
import BookOverview from '../components/BookOverview.vue';
import BookSysnopsis from '../components/BookSysnopsis.vue';
import DialogConfirmation from '../components/DialogConfirmation.vue';
import HeaderAndOverview from '../components/HeaderAndOverview.vue';
import ImportantMessage from '../components/ImportantMessage.vue';

// Services
import { useBookDetail } from '../services/useBookDetail.service';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  bookDetail_isOpenDialogConfirmation,
  bookDetail_onCancel,
  bookDetail_onClickPrimaryButton,
  bookDetail_onQueue,
  bookDetail_typeOfDialogConfirmation,
} = useBookDetail();

/**
 * @description Provide all the data and methods what we need
 */
provide('bookDetail', {
  bookDetail_onQueue,
});
</script>
