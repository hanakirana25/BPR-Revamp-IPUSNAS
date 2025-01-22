<template>
  <header class="flex flex-col px-6 pt-6 gap-4 w-full">
    <section id="top-navigation-bar" class="flex items-center justify-between w-full">
      <h6 class="font-semibold text-base text-black">Good morning, Nadia!</h6>

      <img src="@/app/assets/icons/tabler_bell.svg" alt="icon-bell" class="w-6 h-6" @click="$router.push('/notification')"/>
    </section>

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
  </header>
</template>

<script setup lang="ts">
const search = ref('');
</script>
