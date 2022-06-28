<template>
<div class="relative border-gray-200 flex items-center  border-[1px]  ml-1 " :class="[width,height]" >
        <input type="radio" class="ml-1 appearance-none w-4 h-4 rounded-full border-gray-600 border-2 hover:cursor-pointer before:block before:w-[100%] before:h-[100%] before:rounded-full checked:before:border-[3px] checked:before:border-gray-600 " id="radio" name="button" >
        <label class="pl-1 hover:cursor-pointer" for="radio">{{label}}</label>
</div>

</template>


<script setup lang="ts">

const props = defineProps({
    width:String,
    height:String,
    label:String
})
</script>