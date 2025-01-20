<template>
  <header class="flex justify-between">
    <section id="previous" class="w-fit mt-3">
      <img src="@/app/assets/icons/left-arrow.svg" alt="left-arrow" />
    </section>

    <section id="content" class="flex flex-col items-center gap-6 w-3/4">
      <img src="@/app/assets/images/atomic-habits-detail.png" alt="atomic-habits" class="w-full h-full" />

      <section id="book-information" class="flex flex-col item-center justify-center gap-2">
        <h5 class="font-bold text-black text-center text-2xl">Atomic Habits</h5>

        <section id="overview" class="flex flex-wrap items-center justify-center gap-3">
          <p class="font-semibold text-custom-orange text-sm">James Clear</p>
          <div id="vertical-line" class="w-[2px] h-3 bg-divider-gray rounded-md">&nbsp;</div>

          <section id="reviews" class="flex items-center gap-1">
            <p class="font-semibold text-custom-orange text-sm">Reviews</p>
            <img src="@/app/assets/icons/star.svg" alt="star" class="w-3 h-3" />
            <p class="font-semibold text-custom-orange text-sm">4.5</p>
          </section>

          <p class="font-semibold text-custom-orange text-sm -mt-2">0 Copies Available</p>
        </section>

        <Divider class="!mx-auto !w-2/3 before:!border-divider-gray" type="dashed" />
      </section>
    </section>

    <section id="btn-actions" class="flex flex-col items-center gap-6 mt-3">
      <img src="@/app/assets/icons/three-dots.svg" alt="three-dots" class="w-4" />
      <img src="@/app/assets/icons/bookmark.svg" alt="bookmark" class="w-[10px] h-4" />
    </section>
  </header>
</template>
