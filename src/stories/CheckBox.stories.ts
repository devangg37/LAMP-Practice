// CheckBox.stories.ts

import Checkbox from './CheckBox.vue';

import { Meta } from '@storybook/vue3'; 


export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'CheckBox',
    component: Checkbox,
  } as Meta<typeof Checkbox>