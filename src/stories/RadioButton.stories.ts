import RadioButton from "./RadioButton.vue";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title:'RadioButton',
    component:RadioButton,
   
} as Meta<typeof RadioButton>;

const Template :StoryFn<typeof RadioButton> = (args)=>({
    components:{RadioButton},
    setup(){
        return {args};
    },
    template:'<RadioButton v-bind="args" />'
});

export const First = Template.bind({});
First.args = {
    width:'w-[200px]',
}