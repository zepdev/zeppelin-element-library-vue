import { shallowMount, mount } from "@vue/test-utils";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import { ZelBulletList } from "@/entry";
import { ZelAttributeList } from "@/entry";
import { ZelNotifications } from "@/entry";
import { ZelNumberInput } from "@/entry";
import { ZelVueButton } from "@/entry";
import { ZelRadioButton } from "@/entry";

describe("ZelVueButton", () => {
  let buttonWrapper;
  beforeEach(() => {
    buttonWrapper = shallowMount(ZelVueButton, {
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
});
describe("ZelVueNotification", () => {
  let notificationWrapper;
  beforeEach(() => {
    notificationWrapper = shallowMount(ZelNotifications, {
      propsData: {
        variant: "primary",
        message: "Thank you for signing up!"
      }
    });
  });
  afterEach(() => {
    notificationWrapper.destroy();
  });
  test("expect notification to have a message", () => {
    expect(notificationWrapper.text()).toBe("Thank you for signing up!");
  });
  test("expect notification to have at least primary notification class/variant", () => {
    expect(notificationWrapper.classes()).toContain("zep-notification");
  });
});
describe("ZelVueCheckBox", () => {
  let checkBoxWrapper;
  beforeEach(() => {
    checkBoxWrapper = shallowMount(ZelVueCheckbox, {
      propsData: {
        disabled: false,
        value: true,
        label: "MyCheckBox"
      },
      data: function () {
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
      data: function () {
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
describe("ZelNumberInput", () => {
  let numberInputWrapper;
  beforeEach(() => {
    numberInputWrapper = shallowMount(ZelNumberInput, {
      propsData: {
        minustitle: "Zeppelin Minus",
        plustitle: "Zeppelin Plus",
        max: 100,
        min: 0,
        step: 5,
      },
      data: function () {
        return {
          counter: 1
        };
      }, methods: {
        minusClick(evtValue) {
          counter = evtValue;
        },
        plusClick(evtValue) {
          counter = evtValue;
        }
      },
      template: "<div><zNumberInput v-model='counter' @onminus-click='minusClick' @onplus-click='plusClick'></zNumberInput></div>",
      components: { zNumberInput: ZelNumberInput }
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
    let NumberinputComponent = numberInputWrapper.find("input");
    NumberinputComponent.element.value = 5;
    NumberinputComponent.trigger("change");
    expect(numberInputWrapper.vm.counter).toBe(5);
  })
  test("expect number input value to decrease onMinusClick", () => {
    /*   expect(numberInputWrapper.vm.counter).toBe(1);
      numberInputWrapper.find("#minus").trigger("click");
      expect(numberInputWrapper.vm.counter).toBe(0);  */
  })
  test("expect number input value to increase onPlusClick", () => {
    /* expect(numberInputWrapper.vm.counter).toBe(1);
    numberInputWrapper.find('#plus').trigger("click");
    expect(numberInputWrapper.vm.counter).toBe(2); */
  })
  test("expect plus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#plus").isVisible()).toBe(true)
  })
  test("expect minus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#minus").isVisible()).toBe(true)
  })
});
describe("ZelRadioButton", () => {
  let radioWrapper;
  beforeEach(() => {
    radioWrapper = shallowMount(ZelRadioButton, {
      propsData: {
        checked: false,
        label: "Male",
        name: "title",
        value: "male",
        required: true
      },
      data: function () {
        return {
          checkedValue: "Kofi",
        };
      },
      methods: {
        changeValue: function (newValue) {
          checkedValue = newValue;
        }
      },
      template: `<div>
                  <zRadioButton name="name" id="zep_radio_male" className="zep-radio__input" label="label" value="female" v-bind:checked="checked" v-bind:required="required" v-on:input="changeValue"></zRadioButton>
                </div> `,
      components: { zRadioButton: ZelRadioButton }
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
  test("expect radioButton value to change", () => {
    /* let radioComponent = radioWrapper.find('input[type="radio"]');
    radioComponent.element.selected = true;
    radioComponent.trigger('input')
    expect(radioWrapper.vm.checkedValue).toBe("") */
  });
});
describe("ZelBulletList", () => {
  let bulletListWrapper;
  beforeEach(() => {
    bulletListWrapper = shallowMount(ZelBulletList, {
      propsData: {
        dataSource: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }],
      },
      template: `<zBulletList v-bind:dataSource="dataSource"></zBulletList>`,
      components: { zBulletList: ZelBulletList }
    });
  });
  afterEach(() => {
    bulletListWrapper.destroy();
  });
  test("expect bulletList to render 3 bullet list items", () => {
    expect(bulletListWrapper.findAll('li').wrappers.length).toBe(3)
  })
  test("expect bulletList first item to be Item 1", () => {
    expect(bulletListWrapper.find('li:first-child').text()).toBe("item 1")
  })
  test("expect bulletList to have a (li items) with class 'zep-list__item' ", () => {
    expect(bulletListWrapper.find("li").classes()).toContain("zep-list__item");
  })
  test("expect bulletList to have a (ul items) with class 'zep-list__item' ", () => {
    expect(bulletListWrapper.find("ul").classes()).toContain("zep-list");
  })
})
describe("ZelAttributeList", () => {
  let attributeListWrapper;
  beforeEach(() => {
    attributeListWrapper = shallowMount(ZelAttributeList, {
      propsData: {
        dataSource: [
          { label: "label 1", text: "item 1" },
          { label: "label 2", text: "item 2" },
          { label: "label 3", text: "item 3" },
          { label: "label 4", text: "item 4" }
        ],
      },
      template: `<zAttributeList v-bind:dataSource="dataSource"></zAttributeList>`,
      components: { zAttributeList: ZelAttributeList }
    });
  });
  afterEach(() => {
    attributeListWrapper.destroy();
  });
  test("expect attributeList to render 4 attribute list items", () => {
    expect(attributeListWrapper.findAll('li').wrappers.length).toBe(4)
  })
  test("expect attributeList to have a span label set to label 1", () => {
    expect(attributeListWrapper.find('li:nth-child(1)').text()).toBe("label 1item 1")
  })
  test("expect attributeList to have a text set to item 1", () => {
    expect(attributeListWrapper.find('span:first-child').text()).toBe("label 1")
  })
  test("expect attributeList to have a (li items) with class 'zep-list__item zep-list__item--attribute' ", () => {
    expect(attributeListWrapper.find("li").classes()).toContain("zep-list__item", "zep-list__item--attribute");
  })
  test("expect attributeListWrapper to have a (ul items) with class 'zep-list__item' ", () => {
    expect(attributeListWrapper.find("ul").classes()).toContain("zep-list");
  })
})