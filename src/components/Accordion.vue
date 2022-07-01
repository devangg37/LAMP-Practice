<template>
    <div class = "flex justify-center">
        <div class = "w-[296px] md:w-[896px] h-[24px]">
            <div class="flex justify-between bg-color:#E6E7EA" @click.prevent="active = !active">
                <strong>{{title}}</strong>
                <img src="../assets/PlusButton.jpg" v-show="active">
                <img src="../assets/MinusButton.jpg" v-show="!active">
            </div>
            <div v-show="!active" class="mt-[16px] flex flex-wrap justify-between md:h-[128px] h-[376px]">
                <div v-for="(option, index) in options" :key="index"> 
                    <div class="bg-gray-200 rounded-[8px] w-[296px] md:w-[293.5px] h-[56px] flex items-center justify-center">{{option}}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue';
    const active = ref(false)
    const props = defineProps({
        options :{
            type: Array<String>,
            required: true
        },
        title:{
            type: String,
            required: true
        }
    })
</script>