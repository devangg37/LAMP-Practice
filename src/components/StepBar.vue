<template>
    <div class = "container">
        <div class = "relative mx-10">
            <div class = "absolute top-1.5 bg-gray-400 w-full h-[4px] -z-1 "></div>
            <div class = "absolute top-0 w-full flex justify-between">
            <li v-for="(step,index) in steps" :key="index" class="list-none">
                    <div class = "flex flex-col content-start gap-2 items-center">
                        <div class = "w-[20px] h-[20px] bg-gray-400 rounded-full hover:w-[28px] hover:h-[28px] hover:-mt-1"></div>
                        <div class = "text-2xl">{{step}}</div>
                </div>
            </li>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    steps :{
        type: Array<String>,
        required: true
    }
})
</script>