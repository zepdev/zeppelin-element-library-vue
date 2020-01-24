import { shallowMount, mount } from "@vue/test-utils";
import { ZelVueCheckbox } from "@/entry";
import { ZelVueInput } from "@/entry";
import { ZelVueBulletList } from "@/entry";
import { ZelVueAttributeList } from "@/entry";
import { ZelVueNotifications } from "@/entry";
import { ZelVueNumberInput } from "@/entry";
import { ZelVueButton } from "@/entry";
import { ZelVueRadioButton } from "@/entry";
import { ZelVueSearchInput } from "@/entry";
import { ZelVueSelect } from "@/entry";

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
    notificationWrapper = shallowMount(ZelVueNotifications, {
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
describe("ZelVueNumberInput", () => {
  let numberInputWrapper;
  beforeEach(() => {
    numberInputWrapper = mount(ZelVueNumberInput, {
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
      data: function () {
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
  })
  test("expect plus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#plus").isVisible()).toBe(true)
  })
  test("expect minus button to be visible and available ", () => {
    expect(numberInputWrapper.find("#minus").isVisible()).toBe(true)
  })
});
describe("ZelVueRadioButton", () => {
  let radioWrapper;
  beforeEach(() => {
    radioWrapper = shallowMount(ZelVueRadioButton, {
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
  test("expect radioButton value to change", () => {
    /* let radioComponent = radioWrapper.find('input[type="radio"]');
    radioComponent.element.selected = true;
    radioComponent.trigger('input')
    expect(radioWrapper.vm.checkedValue).toBe("") */
  });
});
describe("ZelVueBulletList", () => {
  let bulletListWrapper;
  beforeEach(() => {
    bulletListWrapper = shallowMount(ZelVueBulletList, {
      propsData: {
        dataSource: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }],
      },
      template: `<zBulletList v-bind:dataSource="dataSource"></zBulletList>`,
      components: { zBulletList: ZelVueBulletList }
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
describe("ZelVueAttributeList", () => {
  let attributeListWrapper;
  beforeEach(() => {
    attributeListWrapper = shallowMount(ZelVueAttributeList, {
      propsData: {
        dataSource: [
          { label: "label 1", text: "item 1" },
          { label: "label 2", text: "item 2" },
          { label: "label 3", text: "item 3" },
          { label: "label 4", text: "item 4" }
        ],
      },
      template: `<zAttributeList v-bind:dataSource="dataSource"></zAttributeList>`,
      components: { zAttributeList: ZelVueAttributeList }
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
describe("ZelVueSearchInput", () => {
  let searchWrapper;
  beforeEach(() => {
    searchWrapper = mount({
      propsData: {
        id: "searchbar",
        placeholder: "Search",
        title: "zepicons-search",
        dataSource:null
      },
       data: function () {
        return {
          searchItems: [
            "forge",
            "enjoy",
            "moment",
            "michael",
            "museum",
            "tolerate",
            "past",
            "headline",
            "module",
            "thaw",
            "popular",
            "arrow"],
          searchItem: ""
        }
      },
      methods: {
        getSearchItem(evtValue) {
          this.searchItem = evtValue;
        }
      },
      template: `<div><zSearchInput 
                  v-model="searchItem"
                  v-bind:dataSource="searchItems"
                  @onlist-click="getSearchItem"
                  @onenter_keypress="getSearchItem">
                  </zSearchInput ></div>`,
      components: { zSearchInput: ZelVueSearchInput }
    })
  })
  afterEach(() => {
    searchWrapper.destroy();
  })
   test("expect search input to emit change event", () => {
    searchWrapper.vm.$emit("change");
    expect(searchWrapper.emitted("change")).toBeTruthy();
   });
   test("expect search input to emit keyup  event", () => {
    searchWrapper.vm.$emit("keyup");
    expect(searchWrapper.emitted("keyup")).toBeTruthy();
  });
   test("expect search input to emit keypress  event", () => {
    searchWrapper.vm.$emit("keypress");
    expect(searchWrapper.emitted("keypress")).toBeTruthy();
  });
  test("expect search input to emit click event for li items", () => {
    searchWrapper.vm.$emit("click");
    expect(searchWrapper.emitted("click")).toBeTruthy();
  });
  test("expect list items for search input to have more than 1 search item present", () => {
    let searchComponent = searchWrapper.find("input");
    searchComponent.element.value = "m";
    searchComponent.trigger("input");
    let listItem = searchWrapper.findAll("li");
    expect(listItem.length).toBeGreaterThan(1)
  })
  test("expect list items for search input to match items that does not exist", () => {
    let searchComponent = searchWrapper.find("input");
    searchComponent.element.value = "Zep";
    searchComponent.trigger("input");
    let listItem = searchWrapper.findAll("li");
    expect(listItem.length).toBe(0)
  })
   test("Should search for item module in the list of items when mo is entered ", () => {
    let searchComponent = searchWrapper.find("input");
    searchComponent.element.value = "mo";
    searchComponent.trigger("input");
    let listItem = searchWrapper.findAll("li");
    listItem.trigger("click");
    expect(searchWrapper.vm.searchItem).toBe("module");
   
  })
})
describe("ZelVueSelect", () => {
 let selectInputWrapper;
  beforeEach(() => {
    selectInputWrapper = mount({
      propsData: {
        label: "Country",
        placeholder: "please select country",
      },
       data: function () {
        return {
          selectItems: [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia"],
          selectedOption: ""
        }
      },
      methods: {
        getSelectedOption(evtValue) {
          this.selectedOption = evtValue;
        }
      },
      template: `<div><zSelect label="Countries"
                  v-model="selectedOption"
                  v-bind:dataSource="selectItems"
                  @selectlist-click="getSelectedOption"
                  >
                  </zSelect ></div>`,
      components: { zSelect: ZelVueSelect }
    })
  })
  afterEach(() => {
    selectInputWrapper.destroy();
  })
  test("expect list item click to be emitted ", () => {
    selectInputWrapper.vm.$emit("click");
    expect(selectInputWrapper.emitted("click")).toBeTruthy();
  })
   test("expect selected item to be set", () => {
      let selectComponent = selectInputWrapper.find("li:first-child");
        selectComponent.trigger("click");
       expect(selectInputWrapper.vm.$data.selectedOption).toBe("Afghanistan")
   })
    test("expect rendered items to be equal to items in the datasource", () => {
        let listItem = selectInputWrapper.findAll("li");
        expect(listItem.length).toBe(selectInputWrapper.vm.$data.selectItems.length)
    })
  test("expect select input to have required props set", () => {
   const parentSelect= mount(ZelVueSelect,{
     propsData: {
       label: "Countries",
       placeholder:"Please select country"
      },
      template: `<div><zSelect label="Countries"
                  v-model="selectedOption"
                  v-bind:dataSource="selectItems"
                  @selectlist-click="getSelectedOption"
                  >
                  </zSelect ></div>`,
     components: { zSelect: ZelVueSelect }
    });
    expect(parentSelect.props("label")).toBe("Countries");
   expect(parentSelect.props("placeholder")).toBe("Please select country");
    parentSelect.destroy();
    
  });
})