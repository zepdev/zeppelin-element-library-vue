<template>
  <div class="zep-select" style="width: 100%;">
    <label id="exp_elem" class="zep-select__label">
      <slot>{{label}}</slot>
    </label>
    <div id="exp_wrapper">
      <button
        aria-haspopup="listbox"
        aria-labelledby="exp_elem exp_button"
        id="exp_button"
        class="zep-select__button"
      >
        <slot>{{placeholder}}</slot>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="zep-select__icon"
        >
          <title>zepicons-navigation-dropdown</title>
          <path
            fill="currentColor"
            d="M9.333 18.667h13.333l-6.667 6.667-6.667-6.667zM22.667 13.333h-13.333l6.667-6.667 6.667 6.667z"
          />
        </svg>
      </button>
      <ul
        id="exp_elem_list"
        tabindex="-1"
        role="listbox"
        aria-labelledby="exp_elem"
        class="zep-select__list zep-visually-hidden"
      >
        <li id="exp_elem_A" role="option" tabindex="0" class="zep-select__listitem"
            v-for="(item , index) in dataItems"
            v-bind:key="index"
            v-on:click="setSelectedValue(item)"
        >

        </li>
    
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZelVueselect",
  props: {
    label: {
      type: String,
      required: true,
      default: "Label"
    },
    dataSource: {
      type: Array,
      required: true,
      default: []
    },
    placeholder: {
      type: String,
      default: "Select One",
      required: true
    }
  },
   data: function() {
    return {
      currentItem: 0,
      dataItems: dataSource,
      isFound: falses
    }
  },
  methods:{
      setSelectedValue(value) {
      this.$emit("selectlist-click", value);
    },
  }
};
</script>

<style>
</style>