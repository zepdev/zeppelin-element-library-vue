import { mount } from "@vue/test-utils";
import { ZelVueSelect } from "@/entry";
describe("ZelVueSelect", () => {
  let selectInputWrapper;
  beforeEach(() => {
    selectInputWrapper = mount({
      data: function() {
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
            "Australia"
          ],
          selectedOption: ""
        };
      },
      methods: {
        getSelectedOption(evtValue) {
          this.selectedOption = evtValue;
        }
      },
      template: `<div><zSelect label="Countries"
                  placeholder="Please select country"
                  v-model="selectedOption"
                  v-bind:dataSource="selectItems"
                  @selectlist-click="getSelectedOption"
                  >
                  </zSelect ></div>`,
      components: { zSelect: ZelVueSelect }
    });
  });
  afterEach(() => {
    selectInputWrapper.destroy();
  });
  test("expect list item click to be emitted ", () => {
    selectInputWrapper.vm.$emit("click");
    expect(selectInputWrapper.emitted("click")).toBeTruthy();
  });
  test("expect selected item to be set", () => {
    let selectComponent = selectInputWrapper.find("li:first-child");
    selectComponent.trigger("click");
    expect(selectInputWrapper.vm.$data.selectedOption).toBe("Afghanistan");
  });
  test("expect rendered items to be equal to items in the datasource", () => {
    let listItem = selectInputWrapper.findAll("li");
    expect(listItem.length).toBe(
      selectInputWrapper.vm.$data.selectItems.length
    );
  });
});
