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
        v-bind:value="value"
        v-bind:dataSource="dataSource"
        v-on:click="getItem"
      >
        <slot v-if="value">{{value}}</slot>
        <slot v-else>{{placeholder}}</slot>
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
      <div class="item_container">
        <ul
          id="exp_elem_list"
          tabindex="-1"
          role="listbox"
          aria-labelledby="exp_elem"
          class="zep-select__list"
          v-show="showItems"
        >
          <li
            :id="index"
            role="option"
            :tabindex="index"
            class="zep-select__listitem"
            v-for="(item , index) in dataSource"
            v-bind:key="index"
            v-on:click="setSelectedValue(item)"
          >
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZelVueSelect",
  props: {
    label: {
      type: String,
      required: true,
      default: "label"
    },
    value: {
      type: String,
      required: true
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
      showItems: false
    };
  },
  methods: {
    setSelectedValue(value) {
      this.$emit("selectlist-click", value);
      this.showItems = false;
    },
    getItem() {
      if (this.showItems) {
        this.showItems = false;
      } else {
        this.showItems = true;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.item_container {
  position: relative;
  width: inherit;
}
.item_container .zep-select__list {
  cursor: pointer;
  max-height: 300px;
  overflow: scroll;
}
.zep-select__listitem:hover {
  background-color: rgb(236, 238, 239);
}
</style>
</style>