import { shallowMount } from "@vue/test-utils";
import { ZelVueBulletList } from "@/entry";
import { ZelVueAttributeList } from "@/entry";
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
