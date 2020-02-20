<template>
  <div class="tabcontent" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZelVueTab",
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { isActive: false };
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>
