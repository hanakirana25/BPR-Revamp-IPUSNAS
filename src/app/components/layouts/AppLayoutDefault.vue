<template>
  <section id="default-layout" class="relative inset-0 z-0 h-full">
    <RouterView />

    <section
      id="bottom-navbar"
      class="fixed bottom-0 left-0 z-[1] flex items-center justify-around px-4 pt-4 pb-6 bg-white shadow-custom-bottom-navbar w-full"
    >
      <section
        id="menu"
        class="flex items-center gap-2 bg-secondary text-primary text-[13px] font-bold p-3 rounded-3xl"
      >
        <img src="@/app/assets/icons/home-active.svg" alt="home" class="w-4 h-4" />

        Home
      </section>

      <section
        id="menu"
        class="flex items-center gap-2 bg-transparent text-muted text-[13px] font-bold p-3 rounded-3xl"
      >
        <!-- <img src="@/app/assets/icons/home-active.svg" alt="home" class="w-4 h-4" /> -->

        Library
      </section>

      <section
        id="menu"
        class="flex items-center gap-2 bg-transparent text-muted text-[13px] font-bold p-3 rounded-3xl"
      >
        <!-- <img src="@/app/assets/icons/home-active.svg" alt="home" class="w-4 h-4" /> -->

        Explore
      </section>

      <section
        id="menu"
        class="flex items-center gap-2 bg-transparent text-muted text-[13px] font-bold p-3 rounded-3xl"
      >
        <!-- <img src="@/app/assets/icons/home-active.svg" alt="home" class="w-4 h-4" /> -->

        Account
      </section>
    </section>
  </section>
</template>

<script setup lang="ts"></script>
