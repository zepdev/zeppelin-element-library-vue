<template>
  <div id="app" class="theme-zeppelin">
    <zbutton variant="primary" size="10" :onClick="onHandleClick">Primary Button</zbutton>
  </div>
</template>

<script>
import { ZelVueButton } from "@/entry";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import "../zeppelin-element-library.css";
export default {
  name: "app",
  data:function(){
    return{
      testmessage:"Button clicked"
    }
    
  },
  components: {
    'zbutton' :ZelVueButton
  },
  methods:{
      onHandleClick(){
       console.log( this.testmessage )
      }
  }
};
</script>
