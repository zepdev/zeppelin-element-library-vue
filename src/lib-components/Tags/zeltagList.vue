<template>
  <div class="tab_list" v-if="value">
    <span class="zep-tag" :class="tagListClass" v-for="(tag, index) in value" v-bind:key="index">
      {{tag}}
      <button class="zep-tag__button" @click="remove(index)">
        <svg
          class="zep-tag__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title @click="remove(index)">Remove</title>
          <path
            fill="currentColor"
            d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"
          />
        </svg>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "ZelVueTagList",
  props: ["value", "tagListClass"],
  methods: {
    remove(index) {
      var clonedValue = this.value.slice();
      clonedValue.splice(index, 1);
      this.$emit("click", clonedValue);
    }
  }
};
</script>