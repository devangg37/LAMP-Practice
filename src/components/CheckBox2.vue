<script setup lang="ts">
import { computed } from '@vue/reactivity';
// javascript code
const props = defineProps({
    // 5 properties viz. value, label, checked, id, disabled
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// Now we define $emit
const emit = defineEmits<{
  (onChange:"change",id:String): void
}>()
//We define a wrapper class
//When the checked state is true, the string "check-box–checked" is included in the wrapperClass property
const wrapperClass = computed(() => {
  const { checked } = props;
  return {
    "check-box": true,
    "check-box--checked": checked,
  };
});

const handleClick = () => {
  emit("change", props.id);
};

</script>

<template>
  <!-- html code -->
    <div
    :class="wrapperClass"
    tabindex="0"
    role="checkbox"
    :aria-checked="props.checked"
    @click="handleClick"
  >
    <span>
      <Square v-if="!props.checked" />
      <CheckedSquare v-if="props.checked" />
    </span>
    <span
      :id="`label-${props.id}`"
      class="label"
    >
      {{ props.label }}
    </span>
  </div>
</template>

<style lang="css">
  /* css code */
</style>