<template>
  <thead>
    <tr class="zep-table__row zep-table__row--header" :class="className">
      <th
        scope="col"
        class="zep-table__cell zep-table__cell--header"
        v-for="(header , index) in tableHeaderData"
        v-bind:key="index"
      >
        <slot>{{header.headername}}</slot>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "ZelVueTableHeader",
  props: {
    className: {
      type: String
    },
    tableHeaderData: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style>
</style>