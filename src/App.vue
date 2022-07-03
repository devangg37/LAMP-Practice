<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Checkbox from "./components/CheckBox.vue";
import Pagination from "./components/Pagination.vue";
import ButtonReal from "./components/ButtonReal.vue";
import { defineComponent, ref } from "vue";
const checkboxvar = ref(false);
const checkbox = defineComponent(Checkbox);

// define props
const page =ref(1);
const currentPage =ref(1);
//pagination variables

//let page=1;
let totalPages = 5;
let total= 40;
let perPage= 10;
//let currentPage= 1;
let hasMorePages= true;

function showMore(pagehere:number) {
      page.value = pagehere;
      currentPage.value = pagehere;
    }

</script>

<template>
  <!-- <checkbox fieldId=”testcheckbox” v-model:checked="checkboxvar" checkheight="h-[23px]" checkwidth="w-[23px]" labelsize="text-[23px]" label="選択肢"></checkbox>
  <div v-if="checkboxvar">The checkbox is selected</div> -->

<!-- pagination  -->
<div id="app" class="min-h-screen bg-gray-100">
  <div class="h-2 w-100 bg-blue-500"></div>
  <div class="max-w-lg mx-auto my-12">
    <pagination :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
      :has-more-pages="hasMorePages" @pagechanged="showMore">
    </pagination>
  </div>
</div>

<div> 
  <button-real></button-real>
</div>

</template>

<style>

</style>
