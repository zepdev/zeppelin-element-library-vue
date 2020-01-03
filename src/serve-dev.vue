<script>
import Vue from "vue";
import { ZelVueSample } from "@/entry";
import { ZelVueButton } from "@/entry";
import "zeppelin-element-library/bundle/zeppelin-element-library.css";

export default Vue.extend({
  name: "app",
  components: {
    ZelVueSample,
    ZelVueButton
  }
});
</script>

<template>
  <div id="app" class="theme-zeppelin">
    <zel-vue-sample />
    <zel-vue-button variant="primary">Primary Button</zel-vue-button>
  </div>
</template>
