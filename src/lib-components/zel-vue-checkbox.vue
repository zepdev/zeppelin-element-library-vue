<template>
  <div class="zep-checkbox">
    <input
      id="checkboxZep"
      class="zep-checkbox__input"
      type="checkbox"
      :disabled="checkboxDisabled"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    />
    <label class="zep-checkbox__label" for="checkboxZep">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "ZelVueCheckbox", // vue component name
  props: {
    disabled: Boolean,
    value: Boolean,
    label: String
  },
  computed: {
    checkboxDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};
</script>
