<template>
  <tfoot>
    <tr class="zep-table__row zep-table__row--header" :class="className">
      <td
        scope="col"
        class="zep-table__cell zep-table__cell--header"
        v-for="(footertd , index) in tableFooterData"
        v-bind:key="index"
      >
        <slot>{{footertd.name || footertd}}</slot>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  name: "ZelVueTableFooter",
  props: {
    className: {
      type: String
    },
    tableFooterData: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>