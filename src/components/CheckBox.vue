<script setup lang="ts">

const props = defineProps({
     // 3 properties viz. label, checked, id
   label: {
    type: String,
     default: "",
  },
   checked: {
    type: Boolean,
     default: false,
   },
   fieldId: {
     type: String,
    default: "",
  },
  checkwidth: {
     type: String,
    default: "w-[23px]",
    required:false,
  },
  checkheight: {
     type: String,
    default: "h-[23px]",
    required: false,
  },
  labelsize: {
     type: String,
    default: "text-[23px]",
    required:false,
  },
 });
</script>
<template>
<div class="flex align-center">
    <input type="checkbox" :checked="checked" @input="(event: Event) => $emit('update:checked',(event.target as HTMLInputElement).checked)"
    :id="fieldId"  class="m-2 accent-gray-600" :class="checkheight,checkwidth" /> 
    <label :for="fieldId" :class="labelsize">
    {{ label }}
    </label>
</div>
  
</template>
