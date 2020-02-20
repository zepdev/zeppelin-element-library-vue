import { mount } from "@vue/test-utils";
import { ZelVueSearchInput } from "@/entry";
describe("ZelVueSearchInput", () => {
  let searchWrapper;

  beforeEach(() => {
    searchWrapper = mount({
      data: function() {
        return {
          dataSource: [
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
            "arrow"
          ],
          searchItem: "",
          currentItem: 0
        };
      },
      methods: {
        getSearchItem(evtValue) {
          this.searchItem = evtValue;
        }
      },
      template: `<div><zSearchInput 
                  id="searchbar"
                  placeholder="Search"
                  title="zepicons-search"
                  v-model="searchItem"
                  v-bind:dataSource="dataSource"
                  @onlist-click="getSearchItem"
                  @onenter_keypress="getSearchItem">
                  </zSearchInput ></div>`,
      components: { zSearchInput: ZelVueSearchInput }
    });
  });
  afterEach(() => {
    searchWrapper.destroy();
  });
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
    expect(listItem.length).toBeGreaterThan(1);
  });
  test("expect list items for search input to not match items that does not exist", () => {
    let searchComponent = searchWrapper.find("input");
    searchComponent.element.value = "Zep";
    searchComponent.trigger("input");
    let listItem = searchWrapper.findAll("li");
    expect(listItem.length).toBe(0);
  });
  test("Should search for item module in the list of items when mo is entered ", () => {
    let searchComponent = searchWrapper.find("input");
    searchComponent.element.value = "mod";
    searchComponent.trigger("input");
    let listItem = searchWrapper.findAll("li:first-child");
    listItem.trigger("click");
    expect(searchWrapper.vm.$data.searchItem).toBe("module");
  });
});
