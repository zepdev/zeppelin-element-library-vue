<template>
  <div id="app" class="theme-zeppelin center">
    <zTabs :tabsizeSmall="true">
      <zTab name="Power Systems" :selected="true">
        <h1>Some Power System Infor</h1>
        <div>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>
      </zTab>
      <zTab name="Plant Systems">
        <h1>Some plant systems</h1>
        <div>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
           Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
      </zTab>
      <zTab name="Aviation">
        <p>Aviations</p>
        <div>Contrary to popular belief, Lorem Ipsum is not simply random text.
           It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
      </zTab>
    </zTabs>
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
    <zTable
      title="Personal Data"
      :tableHeaderData="tableHeader"
      :tableBodyData="tableBody"
      class="test table"
      titleHeaderClassName="header title"
      subtitleHeaderClassName="subtitle header title"
      tableBodyClassName="tableBody ClassName"
      tableHeaderClassName="tableHeader ClassName"
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
import { ZelVueTable } from "@/entry";
import { ZelVueTabs } from "@/entry";
import { ZelVueTab } from "@/entry";
import "../zeppelin-element-library.css";
import { default as mockData } from "../mockdata";
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
    zSelect: ZelVueSelect,
    zTable: ZelVueTable,
    zTabs: ZelVueTabs,
    zTab: ZelVueTab
  },
  data: function() {
    return {
      tabs: [
        {
          id: "t1",
          tabName: "Home Tab"
        },
        {
          id: "t2",
          tabName: "Actions Tabs"
        },
        {
          id: "t3",
          tabName: "Contacts Tabs"
        }
      ],
      tableHeader: [
        {
          id: "1",
          headername: "StudentID"
        },
        {
          id: "2",
          headername: "Last Name"
        },
        {
          id: "3",
          headername: "first Name"
        },
        {
          id: "4",
          headername: "Date of Birth"
        }
      ],
      tableBody: [
        {
          id: "1",
          name: "Kofi",
          firstName: "Adjei",
          DOB: "01.12.1991"
        },
        {
          id: "2",
          name: "Ama",
          firstName: "Vy",
          DOB: "01.03.1991"
        },
        {
          id: "3",
          name: "Abena",
          firstName: "Mensah",
          DOB: "19.11.1991"
        },
        {
          id: "4",
          name: "Yaw",
          firstName: "Nelson",
          DOB: "12.12.1991"
        },
        {
          id: "5",
          name: "Yaa",
          firstName: "Owusu",
          DOB: "31.12.1995"
        }
      ],
      selectedOption: "",
      selectDataSource: [],
      testmessage: "text change",
      checkedItems: [],
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
    },
    getCheckedItems(evtValue) {
      this.checkedItems = evtValue;
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
