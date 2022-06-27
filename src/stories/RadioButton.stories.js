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
    template:'<RadioButton args />'
});

export const First = Template.bind({});
First.args = {
    width:"200px",
    
}