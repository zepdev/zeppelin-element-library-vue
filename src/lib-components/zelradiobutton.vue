<template>
  <label class="zep-radio">
    <slot>{{label}}</slot>
    <!-- <input
      type="radio"
      :checked="checked"
      :value="value"
      :name="name"
      @change="$emit('input', label.toLowerCase())"
      class="zep-radio__input"
    />-->
    <input
      type="radio"
      v-bind:name="name"
      v-bind:class="classNameProp"
      v-bind:id="id"
      v-bind:checked="checked"
      v-bind:value="value"
      v-bind:required="required"
      v-on:change="updateInput"
    />
    <span class="zep-radio__indicator" />
  </label>
</template>

<script>
export default {
  name: "ZelVueRadioButton",
  props: {
    name: {
      type: String,
      required: false
    },
    classNameProp: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    updateInput: function(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
