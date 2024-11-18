<template>
  <div class="flex flex-col bg-light-gray fixed items-center w-full z-10 py-5">
    <div class="flex flex-row justify-between lg:w-8/12 w-11/12">
      <NuxtLink
        to="/"
        class="flex items-center ">
        <img
          src="~/assets/img/logo.png"
          class="h-7" />
      </NuxtLink>
      <div class="flex flex-row items-center gap-10">
        <NuxtLink to="/about"
          class="flex flex-row items-center cursor-pointer max-lg:hidden">
          About Us
        </NuxtLink>
        <div
          @click="handleScrollToTarget('howToUseAider')"
          class="flex flex-row items-center cursor-pointer max-lg:hidden">
          How to use Aider
        </div>
        <div
          @click="handleScrollToTarget('faq')"
          class="items-center cursor-pointer max-lg:hidden">
          FAQs
        </div>
      </div>
      <div class="flex flex-row items-center justify-end gap-10">
        <i
          @click="handleShowMobileMenu()"
          class="fi fi-rr-menu-burger text-[1.2rem] mb-[-.2rem] lg:hidden cursor-pointer"></i>
        <div
          v-if="showMobileMenu"
          class="absolute flex flex-col w-40 gap-3 p-2 bg-white rounded-lg top-12 right-2 drop-shadow-xl">
          <NuxtLink to="/about"
            @click="handleShowMobileMenu()"
            class="text-xs cursor-pointer">
            About Us
          </NuxtLink>
          <div
            @click="handleShowMobileMenu(), handleScrollToTarget('howToUseAider')"
            class="text-xs cursor-pointer">
            How to use Aider
          </div>
          <div
            @click="handleShowMobileMenu(), handleScrollToTarget('faq')"
            class="text-xs cursor-pointer">
            FAQs
          </div>
          <NuxtLink
            to="/"
            @click="handleShowMobileMenu()"
            class="flex flex-row items-center px-10 py-2 border rounded-lg">
            Join Aider
          </NuxtLink>
        </div>
        <NuxtLink
          to="/"
          class="flex flex-row items-center px-10 py-2 border rounded-lg max-lg:hidden">
          Join Aider
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { showAlert } from '~/plugins/sweetalert';
  const emits = defineEmits();
  const route_name = useRoute().name;
  const showMobileMenu = ref(false);

  const handleScrollToTarget = (val) => {
    emits('anchorTarget', val);
  }

  
  const handleShowMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  };
</script>
