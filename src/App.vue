<script setup lang="ts">
import DropDown1 from './components/DropDown.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const options : Array<String> = ['1x', '2x','3x','4x'];
const objectfont : Object = {width: "w-[400px]" ,  height: "h-[70px]"}
</script>

<template>
<DropDown1 :options="options" :font="objectfont" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
