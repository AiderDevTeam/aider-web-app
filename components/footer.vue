<template>
  <div class="font-medium flex flex-col w-full items-center mt-10 bg-light-gray text-[1rem] lg:py-20 py-5">
    <div class="flex flex-col lg:w-8/12 w-11/12 text-[1rem]">
      <div class="flex flex-col gap-10 items-center w-full">
        <div class="flex flex-row flex-wrap w-full justify-between">
          <div class="flex flex-col max-sm:pt-5 max-sm:w-full lg:w-4/12 md:w-3/12 items-start gap-5">
            <NuxtLink to="/" class="flex justify-center">
              <img src="~/assets/img/logo.png" class="h-10" />
            </NuxtLink>
            <div class="inter-font">Your rental solutions experts, empowering seamless equipment rentals for renters and vendors</div>
            <div class="flex flex-row gap-5 text-lg items-center">
              <a target='_blank' rel="noreferrer" href="https://x.com/getaiderapp">
                <i class="fi fi-brands-twitter-alt text-black"></i>
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/getaiderapp/">
                <i class="fi fi-brands-instagram text-black"></i>
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/getaiderapp/">
                <i class="fi fi-brands-linkedin text-black"></i>
              </a>
              <a target='_blank' rel="noreferrer" href="https://web.facebook.com/people/Aider-Technologies/61558707292701/?_rdc=1&_rdr">
                <i class="fi fi-brands-facebook text-black"></i>
              </a>
            </div>
          </div>
          <div class="flex flex-col max-sm:pt-5 max-sm:w-1/2 items-start gap-3">
            <div class="">Company</div>
            <NuxtLink to="/about" class="inter-font text-sm">About</NuxtLink>
            <div @click="handleScrollToTarget('howToUseAider')" class="inter-font text-sm cursor-pointer">How to use Aider</div>
            <div @click="handleScrollToTarget('faq')" class="inter-font text-sm cursor-pointer">FAQs</div>
            <NuxtLink to="/term" class="inter-font text-sm">Terms of Service</NuxtLink>
            <div class="inter-font text-sm">Privacy Policy</div>
          </div>
          <div class="flex flex-col max-sm:w-1/2 max-sm:pt-5 items-start gap-3">
            <div class="">Contact us</div>
            <div class="inter-font text-sm">help@aiderapp.com</div>
            <div class="inter-font text-sm">+234 810 571 6740</div>
          </div>
          <div class="flex flex-col max-sm:pt-10 lg:w-4/12 md:w-3/12 max-sm:w-full items-start gap-5">
            <div class="">Begin the Aider Experience. Get it now on iOS & Android.</div>
            <div class="flex lg:flex-row md:flex-col flex-row w-full items-center gap-5">
              <a target='_blank' rel="noreferrer" href='https://apps.apple.com/us/app/aider-rent-anything/id6477298043'  class="bg-wine flex gap-3 items-center text-white py-2 lg:px-10 px-5 rounded-lg cursor-pointer">
                <img src="~/assets/img/apple-white.png" class="w-5" />
                App Store
              </a>
              <a target='_blank' rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.aider.mobile&hl=en' class="bg-wine flex gap-3 items-center text-white py-2 lg:px-10 px-5 rounded-lg cursor-pointer">
                <img src="~/assets/img/google-play-white.png" class="w-5" />
                Play Store
              </a>
            </div>
            <div class="inter-font text-sm">© {{currentYear}} Aiderapp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emits = defineEmits();
  const todayDate = new Date();
  const currentYear = todayDate.getFullYear();

  const handleScrollToTarget = (val) => {
    emits('anchorTarget', val);
  }
</script>
