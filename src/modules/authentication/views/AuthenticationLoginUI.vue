<template>
  <section id="authentication-login" class="relative inset-0 z-0 flex flex-col p-6 gap-12">
    <header class="flex flex-col gap-7">
      <img src="@/app/assets/icons/left-arrow.svg" alt="icon-left-arrow" class="w-6 h-6" />

      <section id="content" class="flex flex-col gap-2">
        <h1 class="font-bold text-4xl text-black leading-normal">Welcome Back!</h1>
        <h4 class="font-semibold text-xl text-muted leading-normal">Let’s sign you in</h4>
      </section>
    </header>

    <form action="" class="flex flex-col gap-4 w-full mt-28">
      <AppBaseFormGroup name="Email" :validators="authenticationLogin_formValidations.email">
        <FloatLabel id="float-label-email" variant="in">
          <InputText
            v-model="authenticationLogin_formData.email"
            id="input-email"
            type="email"
            variant="filled"
            class="w-full py-2 px-4 text-black text-sm placeholder:text-muted focus:!border-primary focus:placeholder:text-primary"
          />

          <label for="input-email" class="text-muted text-sm focus:!text-primary">Email</label>
        </FloatLabel>
      </AppBaseFormGroup>

      <AppBaseFormGroup name="Password" :validators="authenticationLogin_formValidations.password">
        <FloatLabel variant="in">
          <Password
            v-model="authenticationLogin_formData.password"
            inputId="password"
            variant="filled"
            class="w-full text-black text-sm placeholder:text-muted focus:[&>input]:!border-primary focus:placeholder:text-primary"
            :feedback="false"
            fluid
            required
            toggle-mask
          />
          <label for="password" class="text-muted text-sm focus:!text-primary">Type your password</label>
        </FloatLabel>
      </AppBaseFormGroup>

      <router-link to="/authentication/forgot-password" class="font-semibold text-primary text-sm">
        Forgot your password?
      </router-link>

      <Button
        class="bg-primary font-bold font-neue-text-pro h-[52px] leading-5 mt-3 text-center text-sm text-white p-4 rounded-md [&>span]:text-sm"
        label="Sign In"
        size="large"
        :loading="authenticationLogin_isLoading"
        @click="authenticationLogin_onSubmit"
      />

      <h5 class="font-semibold leading-normal mt-4 text-base text-center text-muted tracking-[0.16px]">
        Don’t have account?

        <router-link to="/authentication/signup" class="font-semibold text-primary"> Sign up </router-link>
      </h5>
    </form>
  </section>
</template>

<script setup lang="ts">
// Services
import { useAuthenticationLoginService } from '../services/useAuthenticationLogin.service';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  authenticationLogin_formData,
  authenticationLogin_formValidations,
  authenticationLogin_isLoading,
  authenticationLogin_onSubmit,
} = useAuthenticationLoginService();
</script>
