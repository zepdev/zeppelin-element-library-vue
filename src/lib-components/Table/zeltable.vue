<template>
  <div>
    <h1 :class="titleHeaderClassName">{{ title }}</h1>
    <h2 v-if="subtitle" :class="subtitleHeaderClassName">{{subtitle}}</h2>
    <table :class="className">
      <ZelVueTableHeader
        :tableHeaderData="tableHeaderData"
        :tableHeaderClassName="tableHeaderClassName"
      />
      <ZelVueTableBody :tableBodyData="tableBodyData" :tableBodyClassName="tableBodyClassName" />
      <ZelVueTableFooter v-if="tableFooterData" :tableFooterData="tableFooterData" />
    </table>
  </div>
</template>

<script>
import ZelVueTableHeader from "./zeltable_header";
import ZelVueTableBody from "./zeltable_body";
import ZelVueTableFooter from "./zeltable_footer";
export default {
  name: "ZelVueTable",
  components: {
    ZelVueTableHeader,
    ZelVueTableBody,
    ZelVueTableFooter
  },
  props: {
    className: {
      type: String
    },
    titleHeaderClassName: {
      type: String
    },
    subtitleHeaderClassName: {
      type: String
    },
    tableBodyClassName: {
      type: String
    },
    tableHeaderClassName: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    tableHeaderData: {
      type: Array,
      required: true,
      default: []
    },
    tableBodyData: {
      type: Array,
      required: true,
      default: []
    },
    tableFooterData: {
      type: Array,
      default: []
    }
  }
};
</script>
  
<style lang="css" scoped>
table {
  width: 100%;
  margin: 20px 0;
}
h1 {
  font-family: "Roboto, sans-serif";
  font-size: 2.5rem;
  font-weight: 500;
  padding: 0 10px;
  line-height: 60px;
  text-transform: none;
  letter-spacing: 0.5px;
}
h2 {
  font-family: "Roboto, sans-serif";
  font-size: 2.25rem;
  font-weight: 500;
  padding: 0 10px;
  line-height: 52px;
  text-transform: none;
  letter-spacing: 0.4px;
}
</style>
