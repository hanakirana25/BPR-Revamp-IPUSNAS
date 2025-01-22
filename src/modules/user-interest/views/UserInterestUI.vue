<template>
  <section id="user-interest" class="relative inset-0 z-0 flex flex-col p-6 gap-8">
    <header class="flex flex-col items-center gap-[10px]">
      <h1 class="font-bold text-center text-xl text-black leading-normal">Welcome!</h1>
      <h4 class="text-base text-center text-muted leading-normal">
        Since we’ve just known each other, choose a few topics that might interest you
      </h4>
    </header>

    <section id="list-options" class="flex flex-wrap gap-4">
      <template v-for="(interest, interestIndex) in LIST_OF_INTERESTS" :key="`interest-${interestIndex}`">
        <Button
          class="font-bold font-neue-text-pro h-[52px] text-center text-sm p-3 rounded-md [&>span]:text-sm"
          :class="[
            selectedInterests.includes(interest)
              ? '!bg-secondary !text-primary !border-2 !border-solid !border-primary'
              : '!bg-light-gray !text-muted !border-none',
          ]"
          :label="interest"
          size="large"
          variant="outlined"
          @click="() => onSelectInterest(interest)"
        />
      </template>
    </section>

    <section id="btn-actions" class="flex items-center w-full gap-4 mt-10">
      <Button
        class="!bg-secondary border-none font-bold font-neue-text-pro h-[52px] text-center !text-primary text-sm p-4 rounded-md [&>span]:text-sm w-full"
        label="Skip for now"
        size="large"
        @click="$router.push('/home')"
      />

      <Button
        class="bg-primary font-bold font-neue-text-pro h-[52px] text-center text-sm text-white p-4 rounded-md [&>span]:text-sm w-full"
        label="Done"
        size="large"
      />
    </section>
  </section>
</template>

<script setup>
const selectedInterests = ref([]);
const LIST_OF_INTERESTS = [
  'Action and Adventure',
  'Classics',
  'Mystery',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
  'Romance',
  'Science Fiction (Sci-Fi)',
  'Short Stories',
  'Thrillers',
  "Women's Fiction",
  'Autobiographies',
  'Biographies',
  'Cookbooks',
  'Memoir',
  'History',
  'Poetry',
  'Self-Help',
  'True Crime',
];

const onSelectInterest = interest => {
  if (selectedInterests.value.includes(interest)) {
    selectedInterests.value = selectedInterests.value.filter(selectedInterest => selectedInterest !== interest);
  } else {
    selectedInterests.value = [...selectedInterests.value, interest];
  }
};
</script>
