import {mount } from "@vue/test-utils";
import { ZelVueRadioButton } from "@/entry";
describe("ZelVueRadioButton", () => {
  let radioWrapper;
  beforeEach(() => {
    radioWrapper = mount(ZelVueRadioButton, {
      propsData: {
        checked: false,
        label: "Male",
        name: "title",
        value: "male",
        required: true
      },
      data: function() {
        return {
          checkedValue: "Kofi"
        };
      },
      methods: {
        changeValue: function(newValue) {
          checkedValue = newValue;
        }
      },
      template: `<div>
                  <zRadioButton name="name" id="zep_radio_male" className="zep-radio__input" label="label" value="female" v-bind:checked="checked" v-bind:required="required" v-on:input="changeValue"></zRadioButton>
                </div> `,
      components: { zRadioButton: ZelVueRadioButton }
    });
  });
  afterEach(() => {
    radioWrapper.destroy();
  });
  test("expect radio component to have a checked props set", () => {
    expect(radioWrapper.props("checked")).toBe(false);
  });
  test("expect radioButton component to have a label set as male", () => {
    expect(radioWrapper.props("label")).toBe("Male");
  });
  test("expect radioButton component to have a value set to John Doe", () => {
    expect(radioWrapper.props("value")).toBe("male");
  });
  test("expect radioButton component to emit a change event", () => {
    radioWrapper.vm.$emit("change");
    expect(radioWrapper.emitted("change")).toBeTruthy();
  });
});
