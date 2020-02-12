import { shallowMount, mount } from "@vue/test-utils";
import { ZelVueInput } from "@/entry";
describe("ZelVueInput", () => {
  let inputWrapper;
  beforeEach(() => {
    inputWrapper = shallowMount(ZelVueInput, {
      propsData: {
        placeholder: "firstname",
        disabled: false,
        label: "First name:",
        value: "John Doe"
      }
    });
  });
  afterEach(() => {
    inputWrapper.destroy();
  });
  test("expect input component to have a disabled props set to false", () => {
    expect(inputWrapper.props("disabled")).toBe(false);
  });
  test("expect input component to have a label set as firstname", () => {
    expect(inputWrapper.props("label")).toBe("First name:");
  });
  test("expect input component to have a value set to John Doe", () => {
    expect(inputWrapper.props("value")).toBe("John Doe");
  });
  test("expect input component to emit a change event", () => {
    inputWrapper.vm.$emit("change");
    expect(inputWrapper.emitted("change")).toBeTruthy();
  });
  test("expect value to change and update the v-model of the input element", () => {
    const parentInput = mount({
      data: function() {
        return {
          firstname: ""
        };
      },
      template: "<div><zInput v-model='firstname'></zInput></div>",
      components: { zInput: ZelVueInput }
    });
    let inputComponent = parentInput.find("input");
    inputComponent.element.value = "John Doe";
    inputComponent.trigger("input");
    expect(parentInput.vm.firstname).toBe("John Doe");
    parentInput.destroy();
  });
});
