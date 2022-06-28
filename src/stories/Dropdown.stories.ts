
import DropDown from "./DropDown.vue"
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title:'DropDown',
    component:DropDown,
} as Meta<typeof DropDown>;

const Template : StoryFn<typeof DropDown>  = (args)=>({
    components:{DropDown},
    setup(){
        return {args};
    },
    template:'<DropDown v-bind="args"/>'
});

export const First = Template.bind({});
First.args = {
    font: {width:"w-[200px]", height:"h-[50px]", top:"top-[50px]",}
};