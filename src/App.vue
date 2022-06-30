<template>
  
  <!-- <ButtonsTest size="large" label="Test Button" />
  <ButtonsTest primary size="large" label="Test Button" />
  <ButtonsTest blocked size="large" label="Test Button" /> -->
  <!-- <ModalComponent  head="Header in Modal" msg="Modal Message" :modalActive="modalActive"/>
  <button @click="toggleModal" type="button">Open Modal</button> -->

  <ModalComponent @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h1>This is a Modal Header</h1>
        <p>This is a modal message</p>
      </div>
  </ModalComponent>
  <!-- <button @click="toggleModal" type="button">Open Modal</button> -->
  <ButtonsTest primary size="large" label="Open Modal" @click="toggleModal"/>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonsTest from './components/Buttons/ButtonsTest.vue';
import { reactive, computed, ref } from 'vue';
import ModalComponent from './components/Modal/ModalComponent.vue';


export default {
  
  name: "Home",
  
  components: {
    ModalComponent,
    ButtonsTest,
  },
  
  setup() {
    
    const modalActive = ref(false);
    const toggleModal = () =>{
        modalActive.value = !modalActive.value
        // alert(modalActive.value)
    }
    return {
        modalActive,
        toggleModal,
    }
    
  }
}
  
</script>

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
