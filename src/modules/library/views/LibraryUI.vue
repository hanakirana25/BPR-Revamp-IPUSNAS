<template>
  <section id="library" class="relative inset-0 z-0 flex flex-col gap-4 pb-28">
    <HeaderCategoriesAndSearch />

    <section id="list-books" class="grid grid-cols-12 gap-4 pb-6 px-6">
      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/atomic-habits-book.png" alt="atomic-habits" class="w-full h-full" />

        <section
          id="tag"
          class="absolute top-4 left-0 rounded-tl-none rounded-tr-[48px] rounded-br-[48px] rounded-bl-[60px] py-1 px-3 bg-light-pink font-bold text-pink text-xs"
        >
          10d
        </section>

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Atomic Habits</h6>
          <p class="text-muted text-xs">James Clear</p>

          <ProgressBar
            class="!bg-light-orange !h-1 [&>div]:!bg-custom-orange mt-1"
            :show-value="false"
            :value="42"
          ></ProgressBar>
        </section>
      </section>

      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/selena-book.png" alt="selena-book" class="w-full h-full" />

        <section
          id="tag"
          class="absolute top-4 left-0 rounded-tl-none rounded-tr-[48px] rounded-br-[48px] rounded-bl-[60px] py-1 px-3 bg-light-pink font-bold text-pink text-xs"
        >
          8h
        </section>

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Selena</h6>
          <p class="text-muted text-xs">Tere Liye</p>

          <ProgressBar
            class="!bg-light-orange !h-1 [&>div]:!bg-custom-orange mt-1"
            :show-value="false"
            :value="82"
          ></ProgressBar>
        </section>
      </section>

      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/atomic-habits-book.png" alt="atomic-habits" class="w-full h-full" />

        <section
          id="tag"
          class="absolute top-4 left-0 rounded-tl-none rounded-tr-[48px] rounded-br-[48px] rounded-bl-[60px] py-1 px-3 bg-light-pink font-bold text-pink text-xs"
        >
          10d
        </section>

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Atomic Habits</h6>
          <p class="text-muted text-xs">James Clear</p>

          <ProgressBar
            class="!bg-light-orange !h-1 [&>div]:!bg-custom-orange mt-1"
            :show-value="false"
            :value="42"
          ></ProgressBar>
        </section>
      </section>

      <section id="book-card" class="col-span-6 relative inset-0 z-0 flex flex-col gap-3">
        <img src="@/app/assets/images/selena-book.png" alt="selena-book" class="w-full h-full" />

        <section
          id="tag"
          class="absolute top-4 left-0 rounded-tl-none rounded-tr-[48px] rounded-br-[48px] rounded-bl-[60px] py-1 px-3 bg-light-pink font-bold text-pink text-xs"
        >
          8h
        </section>

        <section id="book-information" class="flex flex-col gap-1">
          <h6 class="font-bold text-black text-sm">Selena</h6>
          <p class="text-muted text-xs">Tere Liye</p>

          <ProgressBar
            class="!bg-light-orange !h-1 [&>div]:!bg-custom-orange mt-1"
            :show-value="false"
            :value="82"
          ></ProgressBar>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
// Components
import HeaderCategoriesAndSearch from '../components/HeaderCategoriesAndSearch.vue';
</script>
