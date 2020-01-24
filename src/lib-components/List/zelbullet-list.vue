<template>
  <ul class="zep-list">
    <li
      class="zep-list__item"
      v-for="item in dataSource"
      v-bind:key="item.text"
    >
      <slot>{{ item.text }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ZelVueBulletlist",
  props: {
    dataSource: {
      type: Array,
      default: []
    }
  }
};
</script>
