<template>
  <tbody :class="tableBodyClassName">
    <tr
      class="zep-table__row zep-table__row--white"
      :class="tableRowClassName"
      v-for="(row, rowIndex) in tableBodyData"
      v-bind:key="rowIndex"
    >
      <td
        scope="col"
        class="zep-table__cell"
        v-for="(cellData , cellIndex) in row"
        v-bind:key="cellIndex"
      >
        <slot>{{cellData.name || cellData}}</slot>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "ZelVueTableBody",
  props: {
    tableBodyClassName: {
      type: String
    },
    tableRowClassName: {
      type: String
    },
    tableBodyData: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style scoped>
tbody tr:nth-child(even) {
  background-color: #f2f3f4;
  color: rgba(0, 0, 0, 0.72);
}
</style> 

</style>