import { shallowMount, mount } from "@vue/test-utils";
import { ZelVueCheckbox } from "@/entry";
describe("ZelVueCheckBox", () => {
  let checkBoxWrapper;
  beforeEach(() => {
    checkBoxWrapper = shallowMount(ZelVueCheckbox, {
      propsData: {
        disabled: false,
        value: true,
        label: "MyCheckBox"
      },
      data: function() {
        return {
          isChecked: true
        };
      },
      template: "<div><zCheckbox v-model='isChecked'></zCheckbox></div>",
      components: { zCheckbox: ZelVueCheckbox }
    });
  });
  afterEach(() => {
    checkBoxWrapper.destroy();
  });
  test("expect checkbox component to have a disabled props set to false", () => {
    expect(checkBoxWrapper.props("disabled")).toBe(false);
  });
  test("expect checkbox component to have a label set as firstname", () => {
    expect(checkBoxWrapper.props("label")).toBe("MyCheckBox");
  });
  test("expect checkbox component to have a value set to John Doe", () => {
    expect(checkBoxWrapper.props("value")).toBe(true);
  });
  test("expect checkbox component to emit a change event", () => {
    checkBoxWrapper.vm.$emit("change");
    expect(checkBoxWrapper.emitted("change")).toBeTruthy();
  });
  test("expect checked value to change", () => {
    let checkBoxComponent = checkBoxWrapper.find("input");
    checkBoxComponent.element.value = false;
    checkBoxComponent.trigger("input");
    expect(checkBoxWrapper.vm.isChecked).toBe(true);
  });
});
