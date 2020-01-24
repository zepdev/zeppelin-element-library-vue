<template>
  <div class="zep-input-container"
   :class="[error &&  'zep-input-container--error']"
  >
    <input
      type="text"
      id="inputZeppelin"
      :placeholder="placeholder"
      class="zep-input"
      :disabled="inputDisabled"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <label class="zep-input-container__label" for="inputZeppelin"> {{ label }}</label>
    <label
      class="zep-input-container__feedback"
      for="inputZeppelin"
      v-if="error"
      >{{ errorMessage }}
      </label
    >
  </div>
</template>

<script>
export default {
  name:"ZelVueInput",
  props: {
    placeholder: {
      type: String
    },
    disabled: Boolean,
    label: {
      type:String,
      default:"label text"
    },
    value: String,
    error:Boolean,
    errorMessage:{
      type:String,
      default:"Required"
    }
  },
  computed: {
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};
</script>
