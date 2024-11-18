<template>
  <div>
    <NuxtLayout name="default">
      <div class="flex flex-col w-full items-center bg-wine py-10">
        <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
          <div class='flex flex-col gap-5 w-full'>
            <div class="lg:text-[3rem] text-[1.9rem] text-white w-5/6 font-medium">
              Your #1 Rental Hub. Trusted Suppliers, Easy Booking.
            </div>
          </div>
          <div class="flex flex-col items-end">
            <img src="~/assets/img/about_img.jpeg" class="md:h-[25rem] object-fill rounded-[2rem]" />
          </div>
        </div>
      </div>
      <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
        <div class='flex flex-col w-full'>
          <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
            Who we are
          </h2>
          <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0 lg:text-left'>Aider is a leading equipment rental marketplace that connects renters with a wide range of equipment from trusted vendors, offering an efficient solution for individuals, businesses, and event organisers to rent equipment for various needs, including, events, parties, construction, clothing and DIY projects.</p>
        </div>
        <div class="flex flex-col items-center bg-light-gray rounded-[3rem] p-10">
          <img src="~/assets/img/bg_banner.png" class="h-[30rem]" />
        </div>
      </div>
      <div class='grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center'>
        <div class='flex flex-col w-full lg:order-2 lg:items-end'>
          <div class='flex flex-col gap-5'>
            <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>Our Mission</h2>
            <p class='text-base md:text-lg mx-auto max-w-[480px] pt-2 text-center text-gray-500 inter-font lg:mx-0 lg:text-left'>At Aider, we aim to revolutionise the equipment rental industry by providing a safe and secure marketplace where renters can easily find and book the equipment they need while empowering vendors to maximise the utilisation of their assets and grow their businesses.</p>
          </div>
        </div>
        <div class="flex flex-col items-center bg-light-gray rounded-[3rem] p-10">
          <img src="~/assets/img/bg_banner.png" class="h-[30rem]" />
        </div>
      </div>
      <div class='flex flex-col lg:gap-[5rem] gap-10 lg:w-full items-center bg-wine lg:py-[5rem] py-10'>
        <div class='flex flex-col lg:w-8/12 w-11/12 items-center text-white'>
          <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
            AIDER "CERTTI" VALUES
          </h2>
        </div>
        <div class='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:w-8/12 w-11/12 inter-font mt-10 items-start'>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Customer-Centricity</div>
            <div class="">At Aider, we prioritise customer needs and satisfaction above all else, ensuring exceptional user experiences and continuous improvement based on customer feedback.</div>
          </div>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Empowerment</div>
            <div class="">We empower employees to take ownership of their work, make decisions, and contribute to the company's success, fostering a culture of accountability, autonomy, and continuous learning and growth.</div>
          </div>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Respect</div>
            <div class="">At Aider, we respect and value the diversity of backgrounds, perspectives, and identities in the company and the broader community. This is achieved by creating an environment where everyone feels welcomed, respected, and supported.</div>
          </div>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Teamwork</div>
            <div class="">We encourage collaboration, teamwork, and cross-functional cooperation to achieve common goals, leveraging diverse perspectives and skills to solve problems and drive innovation.</div>
          </div>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Transparency</div>
            <div class="">Fostering an environment of openness, honesty, and trust among team members, vendors, and customers, at Aider we promote transparency in communication and decision-making processes.</div>
          </div>
          <div class='flex flex-col gap-2 w-full text-white'>
            <div class="font-semibold text-lg">Innovation</div>
            <div class="">We cultivate an environment where creativity flourishes, encouraging cross-functional collaboration, embracing change, and promoting a mindset of continuous learning and experimentation</div>
          </div>
        </div>
      </div>
      <div class='flex flex-col gap-10 lg:w-8/12 w-11/12 items-center'>
        <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
          THE AIDER ADVANTAGE
        </h2>
        <div class='grid lg:grid-cols-4 md:grid-cols-2 gap-10 w-full inter-font my-10 items-start'>
          <div class='flex flex-col gap-2 w-full'>
            <div class="font-semibold text-lg">Seamless Booking</div>
            <div class="">Renters can easily search, compare, and book equipment online, with flexible rental terms and secure payment options.</div>
          </div>
          <div class='flex flex-col gap-2 w-full'>
            <div class="font-semibold text-lg">Extensive Inventory</div>
            <div class="">Our platform offers a diverse selection of equipment, including tools, machinery, and event-specific items, sourced from reputable suppliers across various industries.</div>
          </div>
          <div class='flex flex-col gap-2 w-full'>
            <div class="font-semibold text-lg">Vendor Solutions</div>
            <div class="">We provide suppliers with a dedicated platform to list and manage their inventory, optimise rental operations, and reach a wider audience of potential renters.</div>
          </div>
          <div class='flex flex-col gap-2 w-full'>
            <div class="font-semibold text-lg">Customer Support</div>
            <div class="">Our dedicated customer support team is available to assist renters and suppliers with any inquiries, issues, or assistance they may need throughout the rental process.</div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  
</script>