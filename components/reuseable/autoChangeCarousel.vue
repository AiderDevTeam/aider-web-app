<template>
  <div class="flex flex-col lg:items-end items-center">
    <div class="flex flex-col items-center lg:w-2/3 w-11/12">
      <div class="flex flex-col w-full">
        <img
          :src="imageDetail.image"
          class="rounded-t-[2rem] h-[20rem] object-cover bg-center
          "
          alt="Carousel Image"
        />
        <div class="rounded-b-[2rem] bg-light-gray w-full py-7 text-center lg:text-xl text-lg inter-font font-medium">
          {{ imageDetail.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";

  const props = defineProps(["carouselImages"]);

  const imageDetail = ref({ title: "", image: "" });
  const currentIndex = ref(0);
  let interval = null;


  const startCarousel = () => {
    if (interval) clearInterval(interval); // Clear any existing interval
    updateImageDetail(); // Update immediately
    interval = setInterval(() => {
      currentIndex.value =
        (currentIndex.value + 1) % props.carouselImages.length;
      updateImageDetail();
    }, 3000); // Change image every 3 seconds
  };

  const updateImageDetail = async () => {
    const currentImage = props.carouselImages[currentIndex.value];
    imageDetail.value = {
      title: currentImage.title || "Default Title",
      image: currentImage.image || "/path/to/default-image.jpg",
    };

    await nextTick();
    // console.log("Updated Image Detail:", imageDetail.value);
  };

  onUnmounted(() => {
    if (interval) clearInterval(interval);
  });

  watch(
    () => props.carouselImages,
    (newImages) => {
      if (newImages.length > 0) {
        startCarousel();
      }
    },
    { immediate: true }
  );
</script>
