<template>
  <div id="app" class="theme-zeppelin center">
    <zButton variant="primary" @click="onHandleClick">Save Data</zButton>
    <zBulletList :dataSource="this.listItems"></zBulletList>
    <zAttributeList :dataSource="this.attributeItems"></zAttributeList>
    <zInput placeholder="Checking" v-model="testmessage"></zInput>
    <zCheckbox label="CheckBox" v-model="isChecked"></zCheckbox>
    <zNotify message="Please becareful!" variant="warning" />
    <zNotify message="Thank you for the info!" variant="info" />
    <zNotify message="Thank you!" variant="success" />
    <zNotify message="Please do not delete!" variant="danger" />
    <hr />
    <zNumberInput
      minustitle="Zeppelin Minus"
      plustitle="Zeppelin Plus"
      v-model="counterparent"
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
      className="zep-radio__input"
      label="Male"
      value="male"
      v-bind:checked="true"
      v-bind:required="true"
      v-on:input="changeValue"
    ></zRadioButton>
    <zRadioButton
      name="title"
      id="zep_radio_female"
      className="zep-radio__input"
      label="Female"
      value="female"
      v-bind:checked="false"
      v-bind:required="true"
      v-on:input="changeValue"
    ></zRadioButton>
    <span>Selected Radio: {{radioButtonCheck}}</span>
  </div>
</template>

<script>
import { ZelVueButton } from "@/entry";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import { ZelBulletList } from "@/entry";
import { ZelAttributeList } from "@/entry";
import { ZelNotifications } from "@/entry";
import { ZelNumberInput } from "@/entry";
import { ZelRadioButton } from "@/entry";

import "../zeppelin-element-library.css";
export default {
  name: "app",
  components: {
    zButton: ZelVueButton,
    zCheckbox: ZelVueCheckbox,
    zInput: ZelVueInput,
    zBulletList: ZelBulletList,
    zAttributeList: ZelAttributeList,
    zNotify: ZelNotifications,
    zNumberInput: ZelNumberInput,
    zRadioButton: ZelRadioButton
  },
  data: function() {
    return {
      testmessage: "text change",
      isChecked: false,
      listItems: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }],
      counterparent: 0,
      radioButtonCheck: "",
      attributeItems: [
        { label: "label 1", text: "item 1" },
        { label: "label 2", text: "item 2" },
        { label: "label 3", text: "item 3" }
      ]
    };
  },
  computed: {
    getText() {
      return this.testmessage;
    }
  },
  methods: {
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
