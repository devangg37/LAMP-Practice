<template>
    <button class="flex items-center justify-between px-3 py-2 bg-white border border-gray-500 rounded-lg" :class="[font.width,font.height]"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false">
        <span>{{ selectedOption }}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="bg-white rounded-lg shadow-lg overflow-hidden" :class="[font.width]"
        >
          <li
            v-for="(option, index) in options"
            :key="index"
            class="px-3 py-4 transition-colors duration-300 hover:bg-gray-200"
            :class="[font.width,font.height]"
            @mousedown.prevent="setOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
</template>

<script setup lang="ts">
    import { ref, toRef } from 'vue';

    const props = defineProps({
        options :{
          type: Array<String>,
          required: true
        },
         font: {
          type: Object,
          default: { width: "w-[300px]" ,  height: "h-[56px]" }
        }
    })

    const selectedOption = ref(props.options[0])
    const isOptionsExpanded = ref(false)

    function setOption(option:String){
        selectedOption.value = option;
        isOptionsExpanded.value = false;
    }

</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
