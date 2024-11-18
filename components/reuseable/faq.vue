<template>
  <div class='flex flex-col gap-10 lg:w-8/12 w-11/12 items-center'>
    <h2 class='pb-4 text-center lg:text-left lg:text-[3rem] text-[1.9rem] font-semibold lg:leading-[56px]'>
      Frequently Asked  Questions
    </h2>
    <div class="grid lg:grid-cols-2 gap-10 items-center w-full inter-font">
      <div v-for="(faq, index) in faqList" :key="index" class="flex flex-col gap-3 w-full pb-5 border-b border-light-gray">
        <div @click="currentIndex = index " class="flex flex-row items-center justify-between cursor-pointer w-full">
          <div class="font-semibold text-lg">{{faq.title}}</div>
          <i class="fi" :class="currentIndex === index ? 'fi-rr-minus' : 'fi-rr-plus'"></i>
        </div>
        <div v-if="currentIndex === index">{{faq.body}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const currentIndex = ref(0);
  const faqList = ref([
    {title: 'What are the benefits of joining Aider?', body: 'As a vendor you get to expand your customer base and earn extra money. Renters save money on purchasing expensive equipment, and you can lease the same for a smaller fraction of the original price of the equipment.'},
    {title: 'What is Aider?', body: 'Aider is an online marketplace that connects people who want to rent an item with trusted vendors'},
    {title: 'How does Aider work?', body: 'As a vendor you list items, and renters browse and book them for their needs.'},
    {title: 'How do I become a verified renter/vendor?', body: 'Before any rental transaction can take place, both renters and vendors will have to undergo a verification process. This ensures trust and security within the Aider community.'},
    {title: 'What measures are kept in place for the security of transactions?', body: 'We employ robust security measures to safeguard all transactions, including and not limited to payment processing and data encryption.'},
    {title: 'How are disputes between renters and vendors resolved?', body: 'Our team would be available to provide relevant information to aid in matters that may arise between renters and vendors, kindly read through our Terms of Service to keep informed.'},
    {title: 'How does Aider ensure the quality of listed items?', body: 'We carefully vet vendors and their listed items to ensure quality and reliability for renters in accordance with our Aider guidelines. Every vendor has a rental score, and a section that shows all reviews from completed rentals.'},
    {title: 'How does the rental score work?', body: 'Once a rental transaction has been completed, the renter rates the vendor through a 5 star renting with a review on their rental experience.'}
  ]);
</script>
