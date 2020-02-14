import { mount } from "@vue/test-utils";
import { ZelVueButton } from "@/entry";
describe("ZelVueButton", () => {
  let buttonWrapper;
  beforeEach(() => {
    buttonWrapper = mount(ZelVueButton, {
      propsData: {
        variant: "primary",
        disabled: false
      }
    });
  });
  afterEach(() => {
    buttonWrapper.destroy();
  });
  test("expect button component to contain a button element", () => {
    expect(buttonWrapper.contains("button")).toBe(true);
  });
  test("expect button component to have a base class ", () => {
    expect(buttonWrapper.classes()).toContain("zep-button");
  });
  test("expect button to have a default primary class", () => {
    expect(buttonWrapper.classes()).toContain("zep-button-primary");
  });
  test("expect button to have a prop disabled set to false", () => {
    expect(buttonWrapper.props("disabled")).toBe(false);
  });
  test("expect button to have emit a click event", () => {
    buttonWrapper.vm.$emit("click");
    expect(buttonWrapper.emitted("click")).toBeTruthy();
  });
  test("expect button to run click callback method and emitted a click event", () => {
    buttonWrapper.vm.callback();
    expect(buttonWrapper.emitted("click")).toBeTruthy();
  });
});
