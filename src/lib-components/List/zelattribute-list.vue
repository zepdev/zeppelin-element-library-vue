<template>
  <ul class="zep-list">
    <li
      class="zep-list__item zep-list__item--attribute"
      v-for="item in dataSource"
      v-bind:key="item.label"
    >
      <span class="zep-list__label">{{ item.label }}</span
      >{{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ZelVueAttributeListItem",
  props: {
    dataSource: {
      type: Array,
      default: []
    }
  }
};
</script>

<style></style>
