<template>
  <section id="home" class="relative inset-0 z-0 flex flex-col gap-8">
    <HeaderAndSearchField />

    <template v-if="isEmpty">
      <section id="empty-data" class="flex flex-col items-center w-full h-fit gap-6">
        <img src="@/app/assets/illustrations/no-item.svg" alt="no-item" />

        <h5 class="font-semibold text-black text-center text-lg max-w-52">
          Nothing on our bookshelf matched your search :(
        </h5>

        <section id="btn-actions" class="flex flex-col gap-6 w-full max-w-52">
          <Button
            class="!bg-secondary !border-secondary font-bold font-neue-text-pro h-[52px] leading-5 text-center text-sm !text-primary p-4 rounded-md [&>span]:text-sm"
            label="Back home"
            size="large"
          />
        </section>
      </section>
    </template>

    <template v-else>
      <EditorPicks />
      <OurRecommendation />
    </template>
  </section>
</template>

<script setup>
// Components
import EditorPicks from '../components/EditorPicks.vue';
import HeaderAndSearchField from '../components/HeaderAndSearchField.vue';
import OurRecommendation from '../components/OurRecommendation.vue';

const isEmpty = ref(false);
</script>
