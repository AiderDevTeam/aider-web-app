<template>
  <div>
    <NuxtLayout name="onboarding">
      <div class="flex flex-col p-20 items-center h-full w-full gap-2">
        <div class="flex flex-col items-center w-3/5 gap-4">
          <img src="~/assets/img/logo.png" class="w-[6rem] mb-6" />
          <div class="flex flex-col w-full gap-3">
            <div class="text-left text-[2rem] font-semibold">Welcome back,</div>
            <div class="text-xl text-gray font-medium">Log in to continue</div>
            <div class="flex flex-col mt-2 w-full">
              <label class="text-[0.875rem] font-medium pb-2">Email Address/User ID</label>
              <div :class="formData.email !== '' ? 'border-black' : ''" class="border-2 border-light-gray text-[0.875rem] flex flex-row items-center rounded-lg p-2">
                <input class="bg-transparent w-full" type="text" placeholder="Enter email address or user ID" v-model="formData.email" />
              </div>
            </div>
            <div class="flex flex-col w-full">
              <label class="text-[0.875rem] font-medium pb-2">Password</label>
              <div :class="formData.password !== '' ? 'border-black' : ''" class="border-2 border-light-gray text-[0.875rem] flex flex-row items-center rounded-lg p-2">
                <input class="bg-transparent w-full" :type="isShowPassword ? 'text' : 'password'" placeholder="Enter Password" v-model="formData.password" />
                <i @click="isShowPassword = !isShowPassword" :class="isShowPassword ? 'fi fi-rr-eye' : 'fi fi-rr-eye-crossed'" class="mb-[-.5rem] cursor-pointer"></i>
              </div>
            </div>
            <NuxtLink to="/forgotpassword" class="flex flex-row font-medium text-blue items-center gap-2 mb-5">
              Forgot your password
              <i class="fi fi-rr-arrow-right mb-[-.5rem]"></i>
            </NuxtLink>
            <div @click="handleSubmit" class="w-full bg-blue text-white p-3 text-center rounded-lg cursor-pointer">
              Login
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { showAlert } from '~/plugins/sweetalert';
  // import {useAuthStore} from '~/store/auth';
  
  const router = useRouter();
  const isShowPassword = ref(false);

  const initialState = {
    email: "",
    password: "",
  };
  let formData = reactive({...initialState});
  
</script>