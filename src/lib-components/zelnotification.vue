<template>
  <div
    :class="[variant ? 'zep-notification  zep-notification--' + variant : '']"
    :message="message"
    :autoHideDuration="autoHideDuration"
  >
    <slot>{{ message }}</slot>
  </div>
</template>

<script>
export default {
  name: "ZelVueNotification",
  props: {
    variant: {
      type: String,
      default: "info"
    },
    message: {
      type: String,
      required: true
    },
    autoHideDuration: {
      type: Number,
      default: 600
    },
    onClose: {
      type: Function
    }
  }
};
</script>
