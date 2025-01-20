<template>
  <section id="authentication-sign-up" class="relative inset-0 z-0 flex flex-col p-6 gap-12">
    <header class="flex items-center gap-3"> <!-- Flex to align items horizontally -->
      <img src="@/app/assets/icons/left-arrow.svg" alt="icon-left-arrow" class="w-6 h-6" />
      
      <section id="content" class="flex flex-col gap-2">
        <div class="flex items-center gap-2"> <!-- Flex for the icon and text -->
          <!-- Notification Text -->
          <h1 class="font-bold text-2xl text-black leading-normal">Notification</h1>
          
          <!-- Red round SVG (twice smaller) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"  
            height="8"
            viewBox="0 0 16 16"
            class="w-4 h-4 text-red-500"
          >
            <circle cx="5" cy="5" r="5" fill="red" />
          </svg>
        </div>        
      </section>
    </header>

    <div class="divide-y divide-dashed divide-gray">
      <section class="flex flex-col gap-2 py-4">
        <div class="flex items-center gap-4"> <!-- Flex for the icon and text -->
          <img style="border-radius: 50px; object-fit: cover;" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXbnkWYNt9EqBN-GydxJ3F3j4AVeCVkwK4QCgH-GxyKJhsESmcZbLhda5sxjX_FJmYHQ&usqp=CAU" 
              alt="icon-checkmark" class="w-8 h-8" />
          <!-- Notification Text -->
          <div>
            <div class="flex items-center gap-4"> 
            <h1 class="font-bold text-xl text-black leading-normal">IPusnas</h1>
            <p class="text-sm font-medium text-gray">Just now</p>
            </div>
            <p class="mt-1 text-md font-medium text-black">Atomic Habits is Now Available</p>
          </div>

          <img src="@/app/assets/icons/right-arrow.svg" alt="icon-left-arrow" class="w-4 h-4 ml-auto" />
        </div>
      </section>
      <section class="flex flex-col gap-2 py-4">
        <div class="flex items-center gap-4"> <!-- Flex for the icon and text -->
          <img style="border-radius: 50px; object-fit: cover;" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXbnkWYNt9EqBN-GydxJ3F3j4AVeCVkwK4QCgH-GxyKJhsESmcZbLhda5sxjX_FJmYHQ&usqp=CAU" 
              alt="icon-checkmark" class="w-8 h-8" />
          <!-- Notification Text -->
          <div>
            <div class="flex items-center gap-4"> 
            <h1 class="font-bold text-xl text-black leading-normal">IPusnas</h1>
            <p class="text-sm font-medium text-gray">Just now</p>
            </div>
            <p class="mt-1 text-md font-medium text-black">Atomic Habits is Now Available</p>
          </div>

          <img src="@/app/assets/icons/right-arrow.svg" alt="icon-left-arrow" class="w-4 h-4 ml-auto" />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const isAgreed = ref(false);
</script>
