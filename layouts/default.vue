<template>
    <div class="w-screen flex flex-col items-center h-screen overflow-auto static box-border">
      <Navbar @anchorTarget="handleScrollToTarget"/>
      <div class="flex flex-col w-full items-center lg:mt-[5rem] mt-10 gap-[5rem]">
        <slot />
      </div>
      <Footer @anchorTarget="handleScrollToTarget"/>
    </div>
</template>

<script setup>
  const handleScrollToTarget = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
</script>