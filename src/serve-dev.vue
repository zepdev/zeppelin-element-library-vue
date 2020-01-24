<template>
  <div id="app" class="theme-zeppelin center">
    <zButton variant="primary" @click="onHandleClick">Save Data</zButton>
    <zBulletList :dataSource="this.listItems"></zBulletList>
    <zAttributeList :dataSource="this.attributeItems"></zAttributeList>
    <zInput
      placeholder="Please enter your firstname"
      label="First Name:"
      v-model="testmessage"
      error
      errorMessage="Please enter your firstname"
    ></zInput>
    <zCheckbox label="CheckBox" v-model="isChecked"></zCheckbox>
    <zNotify message="Please becareful!" variant="warning" />
    <zNotify message="Thank you for the info!" variant="info" />
    <zNotify message="Thank you!" variant="success" />
    <zNotify message="Please do not delete!" variant="danger" />
    <hr />
    <zNumberInput
      minustitle="Zeppelin Minus"
      plustitle="Zeppelin Plus"
      v-model.number="counterparent"
      :max="100"
      :min="5"
      :step="5"
      @onminus-click="minusClick"
      @onplus-click="plusClick"
    />
    <br />
    <zRadioButton
      name="title"
      id="zep_radio_male"
      classNameProp="zep-radio__input"
      label="Male"
      value="male"
      v-bind:checked="true"
      v-bind:required="true"
      v-on:input="changeValue"
    ></zRadioButton>
    <zRadioButton
      name="title"
      id="zep_radio_female"
      classNameProp="zep-radio__input"
      label="Female"
      value="female"
      v-bind:checked="false"
      v-bind:required="true"
      v-on:input="changeValue"
    ></zRadioButton>
    <span>Selected Radio: {{radioButtonCheck}}</span>
    <br />
    <br />

    <zSearchInput
      id="searchbar"
      placeholder="Search"
      title="zepicons-search"
      v-model="searchItem"
      v-bind:dataSource="searchItems"
      @onlist-click="getSearchItem"
      @onenter_keypress="getSearchItem"
    />
    <br />
    <zSelect
      label="Countries"
      placeholder="Please select country"
      v-model="selectedOption"
      :dataSource="selectDataSource"
      @selectlist-click="onSelectOptionClick"
    />
  </div>
</template>

<script>
import { ZelVueButton } from "@/entry";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import { ZelVueBulletList } from "@/entry";
import { ZelVueAttributeList } from "@/entry";
import { ZelVueNotifications } from "@/entry";
import { ZelVueNumberInput } from "@/entry";
import { ZelVueRadioButton } from "@/entry";
import { ZelVueSearchInput } from "@/entry";
import { ZelVueSelect } from "@/entry";
import "../zeppelin-element-library.css";
import { default as mockData } from "../mockdata";
console.log(mockData);
export default {
  name: "app",
  components: {
    zButton: ZelVueButton,
    zCheckbox: ZelVueCheckbox,
    zInput: ZelVueInput,
    zBulletList: ZelVueBulletList,
    zAttributeList: ZelVueAttributeList,
    zNotify: ZelVueNotifications,
    zNumberInput: ZelVueNumberInput,
    zRadioButton: ZelVueRadioButton,
    zSearchInput: ZelVueSearchInput,
    zSelect: ZelVueSelect
  },
  data: function() {
    return {
      selectedOption: "",
      selectDataSource: [],
      testmessage: "text change",
      isChecked: false,
      listItems: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }],
      counterparent: 0,
      radioButtonCheck: "",
      attributeItems: [
        { label: "label 1", text: "item 1" },
        { label: "label 2", text: "item 2" },
        { label: "label 3", text: "item 3" }
      ],
      searchItems: [
        "forge",
        "enjoy",
        "museum",
        "tolerate",
        "past",
        "headline",
        "module",
        "thaw",
        "popular",
        "arrow",
        "wave",
        "sacrifice",
        "scenario",
        "banish",
        "feel",
        "volunteer",
        "intelligence",
        "document",
        "fade",
        "input number",
        "input text",
        "input",
        "radio",
        "radio group",
        "select",
        "checkbox",
        "list",
        "form"
      ],
      searchItem: ""
    };
  },
  computed: {
    getText() {
      return this.testmessage;
    }
  },
  mounted: function() {
    this.selectDataSource = mockData;
  },
  methods: {
    onSelectOptionClick(evtValue) {
      this.selectedOption = evtValue;
    },
    onHandleClick() {
      console.log(this.testmessage);
    },
    minusClick(evtValue) {
      this.counterparent = evtValue;
    },
    plusClick(evtValue) {
      this.counterparent = evtValue;
    },
    changeValue: function(newValue) {
      this.radioButtonCheck = newValue;
    },
    getSearchItem(evtValue) {
      this.searchItem = evtValue;
    },
    getSelectedItem(evtValue) {
      this.selectedOption = evtValue;
    }
  }
};
</script>
<style scoped>
.center {
  width: 50%;
  margin: 30px auto;
}
</style>
