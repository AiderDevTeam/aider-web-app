<template>
  <div>
    <NuxtLayout name="default">
      <div class="flex flex-col w-full items-center py-10">
        <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
          <div class='flex flex-col gap-5 w-full'>
            <div class="lg:text-[3rem] text-[1.9rem] lg:w-4/6 w-5/6 font-medium">
              Rent the things you need. Lend the things you own
            </div>
            <div class="md:w-4/6 inter-font text-lg">
              Aider connects you with your community to borrow anything and make money lending what you have.
            </div>
            <div class="flex flex-row gap-3 items-center">
              <div class="flex flex-row items-center gap-5">
                <a target='_blank' rel="noreferrer" href='https://apps.apple.com/us/app/aider-rent-anything/id6477298043'  class="bg-wine flex gap-3 items-center text-white py-2 px-10 rounded-lg cursor-pointer">
                  <img src="~/assets/img/apple-white.png" class="w-5" />
                  App Store
                </a>
                <a target='_blank' rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.aider.mobile&hl=en' class="bg-wine flex gap-3 items-center text-white py-2 px-10 rounded-lg cursor-pointer">
                  <img src="~/assets/img/google-play-white.png" class="w-5" />
                  PlayStore
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-end p-10">
            <img src="~/assets/img/bg_banner.png" class="h-[40rem]" />
          </div>
        </div>
      </div>
      <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
        <div class='flex flex-col w-full'>
          <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
            Post An Item, <br/> Make Money
          </h2>
          <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0 lg:text-left'>List out your items to your community when you’re not using them. We thoroughly vet all our renters, rest assured your items are in good hands!</p>
        </div>
        <div class="flex flex-col items-center bg-light-gray rounded-[3rem] p-10">
          <img src="~/assets/img/bg_banner.png" class="h-[30rem]" />
        </div>
      </div>
      <div class="flex flex-col w-full items-center bg-light-gray py-[10rem]">
        <div class="lg:text-[3rem] text-[1.9rem] lg:w-2/5 text-center">Your rental solutions experts, empowering seamless equipment rentals for renters and vendors.</div>
      </div>
      <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
        <div class='flex flex-col w-full lg:order-2 items-end'>
          <div class='flex flex-col gap-5'>
            <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>Rent Anything <br/> you need quick.</h2>
            <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0 lg:text-left'>Skip expensive purchases and access a wider range of equipment than traditional stores. Support a trusted vendor today!</p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-light-gray rounded-[3rem] p-10">
          <img src="~/assets/img/bg_banner.png" class="h-[30rem]" />
        </div>
      </div>
      <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
        <div class='flex flex-col w-full'>
          <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
            Items you can <br/> rent on Aider.
          </h2>
          <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font font-semibold lg:mx-0 lg:text-left'>Tap Into Rental Convenience.</p>
          <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0 lg:text-left'>Download the Aider app now for seamless equipment rentals and instant updates on the go! Get it now on iOS and Android.</p>
        </div>
        <ReuseableAutoChangeCarousel :carouselImages=carouselImages />
      </div>
      <div id="howToUseAider" class='flex flex-col lg:gap-[5rem] gap-10 lg:w-full items-center bg-wine lg:py-[5rem] py-10'>
        <div class='flex flex-col lg:w-8/12 w-11/12 items-center text-white'>
          <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
            How to use Aider.
          </h2>
          <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0'>With Aider, you can access any equipment from trusted vendors within your community. Follow these easy steps to start based on your category within the Aider community.</p>
          <div class="flex flex-row gap-7 inter-font font-semibold items-center mt-10">
            <div @click="selectedTab = 'vendor'" :class="selectedTab === 'vendor' ? 'bg-white text-wine' : 'text-white'" class="border border-white flex gap-3 items-center py-2 px-10 rounded-lg cursor-pointer">
              As a Vendor
            </div>
            <div @click="selectedTab = 'renter'" :class="selectedTab === 'renter' ? 'bg-white text-wine' : 'text-white'" class="border border-white flex gap-3 items-center py-2 px-10 rounded-lg cursor-pointer">
              As a Renter
            </div>
          </div>
        </div>
        <div v-if="selectedTab === 'vendor'" class='grid lg:grid-cols-2 gap-10 lg:gap-[5rem] lg:w-8/12 w-11/12 items-center'>
          <div class='flex flex-col w-full text-white'>
            <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
              For Vendors
            </h2>
            <div class='grid lg:grid-cols-2 gap-5 w-full inter-font mt-10 items-start'>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-inbox-in text-lg text-white"></i>
                  <div class="font-semibold">Download & Sign Up</div>
                </div>
                <div class="text-sm">Sign up/log in, Adhere to our Terms of Services, Complete our KYC form.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-sr-bullseye-arrow text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">List an Item</div>
                </div>
                <div class="text-sm">Fill all necessary fields for pictures, description and rental price of said item.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-messages-question text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">Rental Requests</div>
                </div>
                <div class="text-sm">Respond promptly to message requests and start completing rentals.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-bs-people-arrows-left-right text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">Item Exchange</div>
                </div>
                <div class="text-sm">Prepare for Equipment Exchange by ensuring the item is in good condition before lending it to the renter.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-exclamation text-lg text-white mb-[-.3rem]"></i>
                  <div class="font-semibold">Inspect & Collect</div>
                </div>
                <div class="text-sm">Once the rental period has been completed inspect thoroughly and collect item.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-money-bill-wave text-lg text-white mb-[-.3rem]"></i>
                  <div class="font-semibold">Get Paid!!</div>
                </div>
                <div class="text-sm">Receive the rental payment straight into your bank account.</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="~/assets/img/home_img.jpg" class="lg:h-[30rem] rounded-[3rem]" />
          </div>
        </div>
        <div v-if="selectedTab === 'renter'" class='grid lg:grid-cols-2 gap-10 lg:gap-[5rem] lg:w-8/12 w-11/12 items-center'>
          <div class='flex flex-col w-full text-white'>
            <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
              For Renters
            </h2>
            <div class='grid lg:grid-cols-2 gap-5 w-full inter-font mt-10 items-start'>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-inbox-in text-lg text-white"></i>
                  <div class="font-semibold">Download & Sign Up</div>
                </div>
                <div class="text-sm">Sign up/log in, Adhere to our Terms of Services, Complete our KYC form.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-search text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">Search Item</div>
                </div>
                <div class="text-sm">Search through a list vendors for an item you’re looking for and filter by location and price.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-messages-question text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">Request and Book</div>
                </div>
                <div class="text-sm">Check for the item's availability based on the days you need them and send a booking request</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-bs-people-arrows-left-right text-lg text-white mb-[-.2rem]"></i>
                  <div class="font-semibold">Pay & Pickup</div>
                </div>
                <div class="text-sm">When your booking request has been accepted, make payment and then go to pickup the item.</div>
              </div>
              <div class='flex flex-col gap-2 w-full items-center'>
                <div class='flex flex-row gap-4 w-full items-center'>
                  <i class="fi fi-rr-hourglass text-lg text-white mb-[-.3rem]"></i>
                  <div class="font-semibold">Enjoy & Return</div>
                </div>
                <div class="text-sm">Enjoy your rented equipment for your designated time frame, and return it safely to the owner at the end of the rental in good condition.</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="~/assets/img/home_img.jpg" class="lg:h-[30rem] rounded-[3rem]" />
          </div>
        </div>
      </div>
      <ReuseableFaq id="faq" />

    </NuxtLayout>
  </div>
</template>
<script setup>
  const carouselImages = ref([
    {title: 'Photography & Film Items', image: '_nuxt/assets/img/camera.jpg'},
    {title: 'Electronics & Gadgets', image: '_nuxt/assets/img/gadget.jpg'},
    {title: 'Home Garden & Tools', image: '_nuxt/assets/img/handwork2.jpg'},
    {title: 'Construction Equipments', image: '_nuxt/assets/img/handwork.jpg'},
    {title: 'Musical Instruments', image: '_nuxt/assets/img/musical.jpg'}
  ]);
  const selectedTab = ref('vendor');

  const handleScrollToTarget = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
</script>