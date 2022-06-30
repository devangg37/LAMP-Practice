<template>
  <button ref="but" type="button" :class="[classes,w]" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts">

import { reactive, computed,ref } from 'vue';

export default {
  name: 'my-button',

  props: {
    wid:{
      type:String,
    },
    label: {
      type: String,
      required: true,
    },
    primary: {
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
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
