import RadioButton from "./RadioButton.vue";


export default {
    title:'RadioButton',
    component:RadioButton,
   
} 

const Template  = (args)=>({
    components:{RadioButton},
    setup(){
        return {args};
    },
    template:'<RadioButton v-bind="args" />'
});

export const First = Template.bind({});
First.args = {
    width:"w-[200px]",
    height:"h-[50px]",
    label:"Click"
    
}