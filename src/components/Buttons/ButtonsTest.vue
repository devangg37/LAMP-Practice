<template>
  <button :class="classes" @click="onClick" :style="style">{{ label }} <img :src="Arrow" class="float-right relative top-[6px] right-[10px]"/></button>
</template>

<script lang="ts">
import './button.css';
import { reactive, computed } from 'vue';
import Arrow from '../../assets/Forward arrow small.png'

export default {
  name: 'ButtonsTest',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value:any) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props:any, { emit }:any) {

    props = reactive(props);
    return {
      classes: computed(() => ({
        'buttonnormal': true,
        'buttonnormal-red': props.primary,
        'buttonnormal-blocked': props.blocked,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
      Arrow,
      
    }
  },
};
</script>