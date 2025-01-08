<template>
  <header class="flex flex-col gap-6 w-full pt-8 pb-6 px-6 shadow-custom-our-recommendation">
    <swiper id="book-categories" :slidesPerView="'auto'" :spaceBetween="24" class="!ml-0 !mr-0">
      <swiper-slide v-for="(category, index) in listOfCategories" :key="index" class="w-fit">
        <span
          class="font-semibold !text-3xl text-sm"
          :class="[category === selectedCategory ? 'text-black' : 'text-secondary-muted']"
          >{{ category }}</span
        >
      </swiper-slide>
    </swiper>

    <section id="search-bar" class="flex items-center gap-4 w-full">
      <IconField class="w-full">
        <InputIcon class="px-1">
          <template v-if="search">
            <img src="@/app/assets/icons/left-arrow.svg" alt="icon-left-arrow" class="w-4 h-4" />
          </template>

          <template v-else>
            <img src="@/app/assets/icons/search.svg" alt="icon-search" class="w-4 h-4" />
          </template>
        </InputIcon>
        <InputText
          v-model="search"
          class="!bg-light-gray h-12 !rounded-2xl text-sm text-gray w-full focus:!border-primary"
          placeholder="Search something..."
        />
      </IconField>

      <template v-if="search">
        <img src="@/app/assets/icons/close.svg" alt="icon-close" class="w-4 h-4" />
      </template>
    </section>

    <swiper id="book-genres" :slidesPerView="'auto'" :spaceBetween="5" class="!ml-0 !mr-0">
      <swiper-slide
        v-for="(category, index) in listOfGenres"
        :key="index"
        class="w-fit py-2 px-3"
        :class="[category === selectedGenre ? 'bg-secondary  rounded-3xl' : '']"
      >
        <span
          class="font-bold text-sm"
          :class="[category === selectedGenre ? 'text-primary' : 'text-secondary-muted']"
          >{{ category }}</span
        >
      </swiper-slide>
    </swiper>
  </header>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const listOfCategories = ['Borrowed', 'Waiting list', 'Saved list'];
const listOfGenres = [
  'All Genres',
  'Fiction',
  'Romance',
  'Old Classic',
  'Self Development',
  'Mystery',
  'Thriller',
];
const search = ref('');
const selectedCategory = ref('Borrowed');
const selectedGenre = ref('All Genres');
</script>
