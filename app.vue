<template>
  <div>
    <LoaderIndicator v-if="showLoader" />
    <NuxtPage />
  </div>
</template>

<script setup>
  import useUiStore from '~/store/ui';
  const showLoader = useUiStore().$state.pageLoader;
</script>

<style lang="scss">
  @use '~/assets/css/main.css';
</style>
