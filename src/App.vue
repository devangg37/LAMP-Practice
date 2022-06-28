<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Checkbox from "./components/CheckBox.vue";
import { defineComponent, ref } from "vue";
const checkboxvar = ref(false);
const checkbox = defineComponent(Checkbox);
</script>

<template>
  <checkbox fieldId=”testcheckbox” v-model:checked="checkboxvar" checkheight="h-[23px]" checkwidth="w-[23px]" labelsize="text-[23px]" label="選択肢"></checkbox>
  <div v-if="checkboxvar">The checkbox is selected</div>
</template>

<style>

</style>
