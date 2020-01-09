<template>
  <div class="zep-input-container">
    <input
      type="text"
      id="inputZeppelin"
      placeholder="Placeholder"
      class="zep-input"
      :disabled="inputDisabled"
      v-on:change="handleTextChange"
    />
    <label class="zep-input-container__label" for="inputZeppelin">{{placeholder}}</label>
    <label class="zep-input-container__feedback" for="inputZeppelin" v-if="error">{{errorMessage}}</label>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    error: {
      type: Boolean
    },
    errorMessage: {
      type: String
    },
    disabled: Boolean,
    label: String
  },
  computed: {
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};
</script>

