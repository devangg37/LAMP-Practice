<template>
    <div :class= "[width,w]" ref= "pp" >
        <!-- <input type="radio" class="ml-1 appearance-none w-4 h-4 rounded-full border-gray-600 border-2 hover:cursor-pointer before:block before:w-[100%] before:h-[100%] before:rounded-full checked:before:border-[3px] checked:before:border-gray-600 " id="radio" name="button" >
        <label class="pl-1 hover:cursor-pointer" for="radio">{{label}}</label> -->
        <p>ss</p>
    </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
console.log("HI")
 defineProps({
    width: {
        type: String,
        default:"w-[300px]"
    },

})
const w = ref();
w.value = ` border-gray-200 border-[1px] `
const pp =ref('');



</script>