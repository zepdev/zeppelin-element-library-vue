import { mount } from "@vue/test-utils";
import { ZelVueTag } from "@/entry";
describe("ZelVueTag", () => {
    let tagWrapper;
    beforeEach(() => {
        tagWrapper = mount(ZelVueTag, {
            propsData: {
                tagname: "Tag",
                tagtitle: "Remove"
            }
        })
    })
    afterEach(() => {
        tagWrapper.destroy();
    });
    test("expect tag to exist", () => {
        expect(tagWrapper.findAll("span").exists()).toBe(true);
    })
    test("expect tagname to be set", () => {
        expect(tagWrapper.props().tagname).toBeDefined();
        expect(tagWrapper.props().tagname).toBe("Tag");

    });
    test("expect tagtitle to be set", () => {
        expect(tagWrapper.props().tagtitle).toBeDefined();
        expect(tagWrapper.props().tagtitle).toBe("Remove");
    });
    test("expect tag button to have the correct class name of zep-tag__button", () => {
        expect(tagWrapper.find("button").exists()).toBe(true);
        expect(tagWrapper.find("button").classes()).toContain("zep-tag__button");
    })
    test("expect tag to have a span element with the class zep-tag", () => {
        expect(tagWrapper.find("span").exists()).toBe(true);
        expect(tagWrapper.find("span").classes()).toContain("zep-tag");
    })
    test("expect tag to have a svg tag with class name zep-tag__icon ", () => {
        expect(tagWrapper.find("svg").exists()).toBe(true);
        expect(tagWrapper.find("svg").classes()).toContain("zep-tag__icon");
    })
})