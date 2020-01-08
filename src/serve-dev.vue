<script>
import Vue from "vue";
import { ZelVueSample } from "@/entry";
import { ZelVueButton } from "@/entry";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import "../zeppelin-element-library.css";

export default {
  name: "app",
  components: {
    ZelVueSample,
    ZelVueButton,
    ZelVueCheckbox,
    ZelVueInput
  },
  data: {
    function() {
      return {
        counter: 0
      };
    }
  },
  methods: {}
};
</script>

<template>
  <div id="app" class="theme-zeppelin">
    <zel-vue-sample />
    <zel-vue-button variant="primary">Primary Button</zel-vue-button>
    <zel-vue-checkbox label="My Checkbox"></zel-vue-checkbox>
    <zel-vue-input label="Input Field" v-model="counter"></zel-vue-input>
    <p>ddd{{counter}}</p>
  </div>
</template>
