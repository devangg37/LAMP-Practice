<template>
  <button type="button" :class="[classes,wi]" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts">
import './button.css';
import { reactive, computed,ref } from 'vue';

export default {
  name: 'my-button',

  props: {
    w:{
      type:Number,
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
    const wi = ref();
    wi.value = `w-[${props.w}px]`
    console.log(wi.value)
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
