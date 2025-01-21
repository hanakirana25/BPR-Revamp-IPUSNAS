<template>
  <section id="authentication-sign-up" class="relative inset-0 z-0 flex flex-col p-6 gap-12">
    <header class="flex flex-col gap-7">
      <img src="@/app/assets/icons/left-arrow.svg" alt="icon-left-arrow" class="w-6 h-6" />

      <section id="content" class="flex flex-col gap-2">
        <h1 class="font-bold text-4xl text-black leading-normal">Hello There!</h1>
        <h4 class="font-semibold text-xl text-muted leading-normal">Sign up to get started</h4>
      </section>
    </header>

    <form action="" class="flex flex-col gap-4 w-full">
      <AppBaseFormGroup
        v-slot="{ classes }"
        name="Username"
        :validators="authenticationSignUp_formValidations.username"
      >
        <FloatLabel id="float-label-username" variant="in">
          <InputText
            v-model="authenticationSignUp_formData.username"
            v-on="useListenerForm(authenticationSignUp_formValidations, 'username')"
            id="input-username"
            type="text"
            variant="filled"
            class="w-full py-2 px-4 text-black text-sm placeholder:text-muted focus:!border-primary focus:placeholder:text-primary"
            :class="{ ...classes }"
          />

          <label for="input-username" class="text-muted text-sm focus:!text-primary">Username</label>
        </FloatLabel>
      </AppBaseFormGroup>

      <AppBaseFormGroup v-slot="{ classes }" name="Email" :validators="authenticationSignUp_formValidations.email">
        <FloatLabel id="float-label-email" variant="in">
          <InputText
            v-model="authenticationSignUp_formData.email"
            v-on="useListenerForm(authenticationSignUp_formValidations, 'email')"
            id="input-email"
            type="email"
            variant="filled"
            class="w-full py-2 px-4 text-black text-sm placeholder:text-muted focus:!border-primary focus:placeholder:text-primary"
            :class="{ ...classes }"
          />

          <label for="input-email" class="text-muted text-sm focus:!text-primary">Email</label>
        </FloatLabel>
      </AppBaseFormGroup>

      <AppBaseFormGroup
        v-slot="{ classes }"
        name="Password"
        :validators="authenticationSignUp_formValidations.password"
      >
        <FloatLabel variant="in">
          <Password
            v-model="authenticationSignUp_formData.password"
            v-on="useListenerForm(authenticationSignUp_formValidations, 'password')"
            inputId="password"
            variant="filled"
            class="w-full text-black text-sm placeholder:text-muted focus:[&>input]:!border-primary focus:placeholder:text-primary"
            :class="{ ...classes }"
            :feedback="false"
            fluid
            required
            toggle-mask
          />
          <label for="password" class="text-muted text-sm focus:!text-primary">Type your password</label>
        </FloatLabel>
      </AppBaseFormGroup>

      <AppBaseFormGroup
        v-slot="{ classes }"
        name="Confirm Password"
        :validators="authenticationSignUp_formValidations.confirmPassword"
      >
        <FloatLabel variant="in">
          <Password
            v-model="authenticationSignUp_formData.confirmPassword"
            v-on="useListenerForm(authenticationSignUp_formValidations, 'confirmPassword')"
            inputId="confirm-password"
            variant="filled"
            class="w-full text-black text-sm placeholder:text-muted focus:[&>input]:!border-primary focus:placeholder:text-primary"
            :class="{ ...classes }"
            :feedback="false"
            fluid
            required
            toggle-mask
          />
          <label for="confirm-password" class="text-muted text-sm focus:!text-primary"
            >Confirm your password</label
          >
        </FloatLabel>
      </AppBaseFormGroup>

      <section id="terms-and-agreements" class="flex gap-3 w-full">
        <Checkbox
          v-model="authenticationSignUp_isAgree"
          :class="[
            authenticationSignUp_isAgree
              ? '[&>.p-checkbox-box]:border-none [&>.p-checkbox-box]:border-transparent [&>.p-checkbox-box]:!bg-transparent'
              : '[&>.p-checkbox-box]:border-muted',
          ]"
          binary
        >
          <template #icon>
            <img
              v-show="authenticationSignUp_isAgree"
              src="@/app/assets/icons/check.svg"
              class="w-5 h-5"
              alt="icon-check"
            />
          </template>
        </Checkbox>

        <p class="text-black text-sm">
          By clicking this, you agreeing with our
          <span class="font-semibold text-primary"> Terms & Conditions </span> and
          <span class="font-semibold text-primary"> Privacy Policy </span>
        </p>
      </section>

      <Button
        class="bg-primary font-bold font-neue-text-pro h-[52px] leading-5 mt-3 text-center text-sm text-white p-4 rounded-md [&>span]:text-sm"
        label="Sign Up"
        :loading="authenticationSignUp_isLoading"
        size="large"
        @click="authenticationSignUp_onSubmit"
      />

      <h5 class="font-semibold leading-normal mt-4 text-base text-center text-muted tracking-[0.16px]">
        Already have account?

        <router-link to="/authentication/login" class="font-semibold text-primary"> Login </router-link>
      </h5>
    </form>
  </section>
</template>

<script setup lang="ts">
// Services
import AppBaseFormGroup from '@/app/components/base/AppBaseFormGroup.vue';
import { useAuthenticationSignUpService } from '../services/useAuthenticationSignUp.service';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  authenticationSignUp_formData,
  authenticationSignUp_formValidations,
  authenticationSignUp_isAgree,
  authenticationSignUp_isLoading,
  authenticationSignUp_onSubmit,
} = useAuthenticationSignUpService();
</script>
