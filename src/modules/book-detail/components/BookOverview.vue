<template>
  <section id="book-overviews" class="flex items-center justify-between p-4">
    <section id="queue-information" class="flex flex-col items-center gap-2">
      <section id="box-icon" class="bg-secondary rounded-2xl p-2">
        <img src="@/app/assets/icons/queue-primary.svg" alt="queue" class="w-6 h-6" />
      </section>

      <span class="font-medium text-muted text-sm"> 129 queue </span>
    </section>

    <section id="borrower-information" class="flex flex-col items-center gap-2">
      <section id="box-icon" class="bg-secondary rounded-2xl p-2">
        <img src="@/app/assets/icons/borrower.svg" alt="borrower" class="w-6 h-6" />
      </section>

      <span class="font-medium text-muted text-sm"> 31 borrower </span>
    </section>

    <section id="review-information" class="flex flex-col items-center gap-2">
      <section id="box-icon" class="bg-secondary rounded-2xl p-2">
        <img src="@/app/assets/icons/review.svg" alt="review" class="w-6 h-6" />
      </section>

      <span class="font-medium text-muted text-sm"> 3.1k review </span>
    </section>
  </section>
</template>
