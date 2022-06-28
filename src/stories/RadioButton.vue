<template>
    <div :class="[w]" id="di">
        <!-- <input type="radio" class="ml-1 appearance-none w-4 h-4 rounded-full border-gray-600 border-2 hover:cursor-pointer before:block before:w-[100%] before:h-[100%] before:rounded-full checked:before:border-[3px] checked:before:border-gray-600 " id="radio" name="button" >
        <label class="pl-1 hover:cursor-pointer" for="radio">{{label}}</label> -->
        gg
    </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
console.log("HI")
const props = defineProps({
    width: {
        type: String,
        default:"300"
    },

})
const w = ref();
w.value = ` border-gray-200 border-[1px] w-[${props.width}] `
const ele = document.getElementById('di') as HTMLElement;
ele?.classList.add(props.width)
console.log(ele?.classList)
</script>