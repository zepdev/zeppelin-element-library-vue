import { mount } from "@vue/test-utils";
import { ZelVueTabs } from "@/entry";
import { ZelVueTab } from "@/entry";
describe("ZelVueTab", () => {
    let zelTabWrapper;
    beforeEach(() => {
        zelTabWrapper = mount(ZelVueTab, {
            propsData: {
                name: "Tab",
                selected: false
            }
        })
    });
    afterEach(() => {
        zelTabWrapper.destroy();
    });
    test("expect tabs to have a div with class tabcontent", () => {
        expect(zelTabWrapper.classes()).toContain('tabcontent')
    })
    test("expect zeltab to contain tab content div", () => {
        expect(zelTabWrapper.findAll('div').exists()).toBe(true)
    })
    test("expect div content to not display by default", () => {
        expect(zelTabWrapper.vm.$el.style.display).toBe('none');
    })
    test("expect div content to be displayed when isActive is set to True", () => {
        expect(zelTabWrapper.vm.$el.style.display).toBe('none');
        zelTabWrapper.vm.isActive = true;
        expect(zelTabWrapper.vm.$el.style.display).toBe('');
    })
    test("expect prop selected to be defined", () => {
        expect(zelTabWrapper.props().selected).toBeDefined();
    })
    test("expect prop name to be defined", () => {
        expect(zelTabWrapper.props().name).toBeDefined();
    })
});
describe("ZelVueTabs", () => {
    let zelTabsWrapper;
    beforeEach(() => {
        zelTabsWrapper = mount(ZelVueTabs, {
            propsData: {
                tabsizeSmall: true,
                tabsItems: [
                    {
                        id: "t1",
                        name: "Tab 1"
                    },
                    {
                        id: "t2",
                        name: "Tab 2"
                    }
                ],
                tabindex: 1,
                id: 'mytestTab',
                className: "mytestTabClass"
            },
        })
    });
    afterEach(() => {
        zelTabsWrapper.destroy();
    });
    test("expect zTab to exist", () => {
        expect(zelTabsWrapper.exists()).toBe(true)
    })
    test("expect tab component to have class zep-tabs set", () => {
        expect(zelTabsWrapper.classes()).toContain('zep-tabs');
    });
    test("expect tab size to be defined", () => {
        expect(zelTabsWrapper.props().tabsizeSmall).toBeDefined();
        expect(zelTabsWrapper.props().tabsizeSmall).toBe(true);
    })
    test("expect tab to emit click", () => {
        zelTabsWrapper.vm.$emit("click");
        expect(zelTabsWrapper.emitted("click")).toBeTruthy();
    });
    test("tab items array to exist", () => {
        expect(Array.isArray(zelTabsWrapper.vm.$data.tabs)).toBe(true);
    });
    test("expect tab ID to be defined", () => {
        expect(zelTabsWrapper.props().id).toBeDefined();
    })
})