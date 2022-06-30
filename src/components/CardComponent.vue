<template>
    <div class="sm: w-[300px] h-[180px] flex justify-center  space-x-1 bg-white border-2 m-2 border-b-4 rounded-lg ">
        <div class=" h-full basis-1/4 flex  items-center">
            <div class=" relative w-[90%] h-[88px] border-[0.5px] mx-auto">
                <img :src="img1" class="absolute w-full h-full object-contain" v-if="selectImg==0" >
                <img :src="img2" class="absolute w-full h-full object-contain" v-if="selectImg==1" >
                <img :src="img3" class="absolute w-full h-full object-contain" alt="" v-if="selectImg==2">
            </div>
        </div>
        <div class="h-full basis-3/4 flex flex-col justify-between  ">
            <h class="font-cardheading ">Xperia 1 IV</h>
            <p class=" text-xs ">SO-51C</p>
            <div class="flex w-[58px] items-center justify-between ">
                <div class="w-[16px] h-[16px] rounded-full bg-purple-500 " v-on:click="selectImg=0"></div>
                <div class="w-[16px] h-[16px] rounded-full bg-blue-900 " v-on:click="selectImg=1"></div>
                <div class="w-[16px] h-[16px] rounded-full bg-green-800 " v-on:click="selectImg=2"></div>
            </div>
            <div class="flex items-center space-x-2 ">
                <button type="button" class="w-[58px] h-[21px] flex items-center justify-center border-black border-[1px]  text-xs ">発売前</button>
                <button class="w-[58px] h-[21px] border-black  flex items-center justify-center border-[1px] text-sm">5G</button>
            </div>
            <p class="break-words ">備考テキスト備考テキスト備考テキスト備考テキスト</p>
            <p class="text-right mr-2 break-words">110,352円〜</p>
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const selectImg = ref(0);


</script>

