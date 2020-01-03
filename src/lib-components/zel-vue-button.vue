<template>
  <button
    class="zep-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :class="[
      variant ? 'zep-button-' + variant : '',
      size === 'small' ? 'zep-button--small' : '',
      fullWidth ? 'zep-button--small' : ''
    ]"
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
    variant: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: ""
    },
    size: String,
    disabled: Boolean,
    fullWidth: Boolean
  },
  computed: {
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
