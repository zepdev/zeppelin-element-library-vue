<template>
  <div class="zep-input-container">
    <input
      type="text"
      id="inputZeppelin"
      :placeholder="placeholder"
      class="zep-input"
      :disabled="inputDisabled"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <label class="zep-input-container__label" for="inputZeppelin">{{
      placeholder
    }}</label>
    <label
      class="zep-input-container__feedback"
      for="inputZeppelin"
      v-if="error"
      >{{ errorMessage }}</label
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    disabled: Boolean,
    label: String,
    value: String,
    error:Boolean,
    errMessage:String
  },
  computed: {
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};
</script>
