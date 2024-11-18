<template>
  <div class="fixed flex flex-col items-center justify-center left-0 top-0 z-50 transition-all bg-[#e6e6f5] h-full w-full" :class="isDisplay">
    <img src="~/assets/img/logomark.png" class="ping h-2/5" />
  </div>
</template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';
import useUiStore from '~/store/ui';
const nuxtApp = useNuxtApp();
const isDisplay = ref('');

// Watch for changes in showLoader
watch(() => useUiStore().pageLoader, (newVal) => {
  if (newVal === true) {
    isDisplay.value = '';
  } else if (newVal === false) {
    setTimeout(() => {
      isDisplay.value = 'hidden';
    }, 1000);
  }
});

onMounted(() => {
  nuxtApp.hook("page:finish", () => {
    if (useUiStore().pageLoader) {
      useUiStore().setPageLoader(false);
    }
  });
});
</script>

<style scoped>
.ping {
  animation: ping 2s ease-in-out infinite both;
}

@keyframes ping {
  0% {
    transform: scale(0.2);
    opacity: 0.8;
  }
  80% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}
</style>
