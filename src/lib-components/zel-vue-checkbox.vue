<template>
  <div class="zep-checkbox">
    <input
      @click="handleClick"
      :disabled="checkboxDisabled"
      :check="checkboxChecked"
      class="zep-checkbox__input"
      type="checkbox"
      value
      id="checkboxZep"
    />
    <label class="zep-checkbox__label" for="checkboxZep">{{label}}</label>
  </div>
</template>


<script>
export default {
  name: "ZelVueCheckbox", // vue component name

  props: {
    disabled: Boolean,
    check: Boolean,
    label: String
  },
  computed: {
    checkboxDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    methods: {
      handleClick(evt) {
        this.$emit("click", evt);
      }
    }
  }
};
</script>


