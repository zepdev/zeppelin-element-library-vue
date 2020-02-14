<template>
  <button
    class="zep-button"
    @click="callback(event)"
    :class="[
      variant ? 'zep-button-' + variant : '',
      size === 'small' ? 'zep-button--small' : '',
      fullWidth ? 'zep-button--full' : ''
    ]"
    :disabled="disabled"
  >
    <span
      class="zep-button__text"
      :class="[variant === 'tertiary' ? 'zep-button__text--tertiary' : '']"
    >
      <slot>Primary Button</slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "ZelVueButton",
  props: {
    disabled: Boolean,
    fullWidth: Boolean,
    icon: {
      type: String,
      default: ""
    },
    size: String,
    variant: {
      type: String,
      default: "primary"
    }
  },
  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  }
};
</script>
