<template>
  <section id="splash-screen" class="relative inset-0 z-0 flex flex-col">
    <img src="@/app/assets/illustrations/splash-screen.png" alt="Splash Screen" class="w-full h-auto" />

    <section id="content" class="flex flex-col gap-8 p-6">
      <h1 class="font-bold text-4xl text-black leading-normal">Read books with anyone, anywhere, for free</h1>

      <section id="btn-actions" class="flex flex-col gap-4">
        <Button
          as="router-link"
          class="bg-primary font-bold font-neue-text-pro h-[52px] text-center text-sm text-white p-4 rounded-md [&>span]:text-sm"
          label="Sign Up"
          size="large"
          to="/authentication/sign-up"
        />

        <Button
          as="router-link"
          class="!bg-secondary border-none font-bold font-neue-text-pro h-[52px] text-center !text-primary text-sm p-4 rounded-md [&>span]:text-sm"
          label="Login"
          size="large"
          to="/authentication/login"
        />
      </section>
    </section>
  </section>
</template>
