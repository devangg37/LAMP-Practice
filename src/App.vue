<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import RadioButton from './components/RadioButton.vue';
import CardComponent from './components/CardComponent.vue';

</script>

<template >
  <div class="md:w-[960px] md:mx-auto">
    <div class="w-full flex flex-wrap justify-start  items-center">
      <div   class=" flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class=" flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class="flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class=" flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class="flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class= " flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class=" flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class="flex justify-center sm:justify-start flex-grow">
        <CardComponent />
      </div>
      <div class="flex justify-center sm:justify-start  flex-grow">
        <CardComponent />
      </div>
    </div>
  </div>

</template>

