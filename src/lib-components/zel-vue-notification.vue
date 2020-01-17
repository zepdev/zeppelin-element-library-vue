<template>
  <div
    :class="[variant ? 'zep-notification  zep-notification--' + variant : '']"
    :message="message"
    :autoHideDuration="autoHideDuration"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "notifications",
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
