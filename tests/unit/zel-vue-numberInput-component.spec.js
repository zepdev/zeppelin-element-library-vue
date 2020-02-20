import { mount } from "@vue/test-utils";
import { ZelVueNumberInput } from "@/entry";
describe("ZelVueNumberInput", () => {
  let numberInputWrapper;
  beforeEach(() => {
    numberInputWrapper = mount(ZelVueNumberInput, {
      propsData: {
        minustitle: "Zeppelin Minus",
        plustitle: "Zeppelin Plus",
        max: 100,
        min: 0,
        step: 5
      },
      data: function() {
        return {
          counter: 1
        };
      },
      methods: {
        minusClick(evtValue) {
          counter = evtValue;
        },
        plusClick(evtValue) {
          counter = evtValue;
        }
      },
      template:
        "<div><zNumberInput v-model='counter' @onminus-click='minusClick' @onplus-click='plusClick'></zNumberInput></div>",
      components: { zNumberInput: ZelVueNumberInput }
    });
  });
  afterEach(() => {
    numberInputWrapper.destroy();
  });
  test("expect number input to have a title or tooltip Zeppelin Minus", () => {
    expect(numberInputWrapper.props("minustitle")).toBe("Zeppelin Minus");
  });
  test("expect number input to have a title or tooltip Zeppelin Plus", () => {
    expect(numberInputWrapper.props("plustitle")).toBe("Zeppelin Plus");
  });
  test("expect number input component to emit a change event", () => {
    numberInputWrapper.vm.$emit("change");
    expect(numberInputWrapper.emitted("change")).toBeTruthy();
  });
  test("expect number input component to emit a onminus click event", () => {
    numberInputWrapper.vm.$emit("onminus-click");
    expect(numberInputWrapper.emitted("onminus-click")).toBeTruthy();
  });
  test("expect number input component to emit a onplus click event", () => {
    numberInputWrapper.vm.$emit("onplus-click");
    expect(numberInputWrapper.emitted("onplus-click")).toBeTruthy();
  });
  test("expect number input value to increase onValueChange", () => {
    const parentNumberInputWrapper = mount({
      data: function() {
        return {
          counter: 0
        };
      },
      template: "<div><zNumberInput v-model='counter'></zNumberInput></div>",
      components: { zNumberInput: ZelVueNumberInput }
    });
    const numberInputComponent = parentNumberInputWrapper.find("input");
    numberInputComponent.element.value = 5;
    numberInputComponent.trigger("input");
    expect(parentNumberInputWrapper.vm.counter).toBe(5);
  });
  test("expect plus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#plus").isVisible()).toBe(true);
  });
  test("expect minus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#minus").isVisible()).toBe(true);
  });
  test("expect clear method to have been called ", () => {
    numberInputWrapper.vm.clear();
    expect(numberInputWrapper.emitted("input")).toBeTruthy();
  });
  test("expect decrement method to have been called", () => {
    numberInputWrapper.vm.onDecreament(5);
    expect(numberInputWrapper.emitted("onminus-click")).toBeTruthy();
  });
  test("expect Increment method to have been called", () => {
    numberInputWrapper.vm.onIncreament(10);
    expect(numberInputWrapper.emitted("onplus-click")).toBeTruthy();
  });
});
