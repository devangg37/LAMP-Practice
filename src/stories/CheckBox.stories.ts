// CheckBox.stories.ts

import Checkbox from './CheckBox.vue';

import { Meta, StoryFn } from '@storybook/vue3'; 


export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'CheckBox',
    component: Checkbox,
  } as Meta<typeof Checkbox>

  const Template: StoryFn<typeof Checkbox> = (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" />',
  });

  //👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'checkbox', labelsize: 'text-[23px]' , fieldId: 'check-1' };