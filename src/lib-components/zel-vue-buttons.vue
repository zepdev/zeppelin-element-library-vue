<template>
  <button
    class="zep-button"
    @click="onClick"
    :class="[
      variant ? 'zep-button-' + variant : '',
      size === 'small' ? 'zep-button--small' : '',
      fullWidth ? 'zep-button--small' : ''
    ]"
    :disabled="buttonDisabled"
  >
    <span
      class="zep-button__text"
      :class="[variant === 'tertiary' ? 'zep-button__text--tertiary' : '']"
    >
      <slot></slot>
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
    onClick:{
      type:Function,
      required:false
    },
    variant: {
      type: String,
      default: "primary"
    },
  },
  computed: {
    buttonDisabled() {
      let con=this.disabled;
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
};
</script>
