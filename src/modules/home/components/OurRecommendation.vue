<template>
  <section
    id="our-recommendations"
    class="relatve inset-0 z-0 flex flex-col gap-5 mt-4 p-6 w-full shadow-custom-our-recommendation"
  >
    <header id="recommendation-and-sorting" class="flex items-center justify-between">
      <h4 class="font-semibold text-lg text-black">Our Recommendation</h4>
    </header>

    <swiper id="book-categories" :slidesPerView="'auto'" :spaceBetween="5" class="!ml-0 !mr-0">
      <swiper-slide
        v-for="(category, index) in listOfCategories"
        :key="index"
        class="w-fit py-2 px-3"
        :class="[category === selectedCategory ? 'bg-secondary  rounded-3xl' : '']"
      >
        <span
          class="font-bold text-sm"
          :class="[category === selectedCategory ? 'text-primary' : 'text-secondary-muted']"
          >{{ category }}</span
        >
      </swiper-slide>
    </swiper>

    <section id="list-books" class="grid grid-cols-12 gap-4">
      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/atomic-habits-book.png" alt="atomic-habits" class="w-full h-full" />

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Atomic Habits</h6>

          <section id="queue" class="flex items-center gap-1">
            <img src="@/app/assets/icons/queue.svg" alt="queue" />

            <span class="text-secondary-gray text-xs"> 129 queue </span>
          </section>
        </section>
      </section>

      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/si-putih-book.png" alt="si-putih" class="w-full h-full" />

        <section
          id="tag"
          class="absolute top-4 left-0 rounded-tl-none rounded-tr-[48px] rounded-br-[48px] rounded-bl-[60px] py-1 px-3 bg-pink font-bold text-white text-xs"
        >
          New
        </section>

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Si Putih</h6>

          <section id="queue" class="flex items-center gap-1">
            <img src="@/app/assets/icons/queue.svg" alt="queue" />

            <span class="text-secondary-gray text-xs"> 23 queue </span>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const selectedCategory = ref('All Genres');
const listOfCategories = [
  'All Genres',
  'Fiction',
  'Romance',
  'Old Classic',
  'Self Development',
  'Mystery',
  'Thriller',
];
</script>
