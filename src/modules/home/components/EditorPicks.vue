<template>
  <section id="editor-picks" class="relative inset-0 z-0 flex flex-col px-6 gap-5 w-full">
    <header id="information-and-sorting" class="flex items-center justify-between">
      <h1 class="font-bold text-4xl text-black">Editor picks</h1>
    </header>

    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :autoplay="true"
      :loop="true"
      class="!ml-0 !mr-0"
    >
      <swiper-slide class="relative inset-0 z-0 w-full py-2 max-w-[17rem]" data-swiper-autoplay="2000">
        <section
          id="card-body"
          class="flex flex-col bg-card-editor-picks gap-9 p-4 rounded-tl-lg rounded-bl-lg w-full max-w-48"
        >
          <h6 class="font-medium text-base text-black">Selena – Tere Liye</h6>

          <section id="detail-information" class="flex flex-col gap-2">
            <p class="text-muted text-xs">The Bumi series has always entertaining. Cool!</p>

            <span id="stock" class="font-bold text-custom-orange text-xs"> 0 Copies Available </span>
          </section>
        </section>

        <img
          src="@/app/assets/images/selena-book.png"
          alt="book-selena"
          class="absolute top-0 right-0 w-full h-full max-w-28"
        />
      </swiper-slide>

      <swiper-slide class="relative inset-0 z-0 w-full py-2 max-w-[17rem]" data-swiper-autoplay="2000">
        <section
          id="card-body"
          class="flex flex-col bg-card-editor-picks gap-9 p-4 rounded-tl-lg rounded-bl-lg w-full max-w-48"
        >
          <h6 class="font-medium text-base text-black">Selena – Tere Liye</h6>

          <section id="detail-information" class="flex flex-col gap-2">
            <p class="text-muted text-xs">The Bumi series has always entertaining. Cool!</p>

            <span id="stock" class="font-bold text-custom-orange text-xs"> 0 Copies Available </span>
          </section>
        </section>

        <img
          src="@/app/assets/images/selena-book.png"
          alt="book-selena"
          class="absolute top-0 right-0 w-full h-full max-w-28"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
