<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal flex justify-center items-center h-[100vh] w-[100vw] fixed left-0 top-0 bg-[#999999]/70">
          <transition name="modal-animation-inner">
              <div v-show="modalActive" class="modal-inner relative w-4/5 h-4/5 border-[#707070] bg-[#fff]">
                <img @click="close" :src="closeicon" class="float-right top-4 right-4 absolute"/>
                <div class=" px-[16px] py-[64px] w-4/5 h-4/5 m-auto">
                  <slot/>
                </div>
                <ButtonsTest @click="close" primary label="Close"/>
              </div>
          </transition>
        </div>
    </transition>
</template>

<script lang="ts">
import { reactive, computed, ref } from 'vue';
import { jsxClosingElement } from '@babel/types';
import closeicon from '../../assets/閉じる.png';
import ButtonsTest from '../Buttons/ButtonsTest.vue'


export default {
  name: 'ModalComponent',
  components: {
    ButtonsTest,
  },

  props: {
    head: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    modalActive: {
      type: Boolean,
    },
    
  },
  emits: [],
  setup(props:any, { emit }:any) {

    const close = () => {
      emit("close");
    };

    return {
        close,
        closeicon,
    }
    
  },
};

</script>

<style scoped>
.modal-animation-enter-active, .modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>