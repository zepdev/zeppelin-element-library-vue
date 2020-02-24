import { mount } from "@vue/test-utils";
import { ZelVuePagination } from "@/entry";
describe("ZelVuePagination", () => {
    let paginationWrapper;
    const setTotalPages = jest.fn()
    beforeEach(() => {
        paginationWrapper = mount(ZelVuePagination, {
            propsData: {
                perpage: 2,
                visiblebuttons: 2,
                currentpage: 1,
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            listeners: {
                onPagechanged: jest.fn()
            },

        })
    })
    afterEach(() => {
        paginationWrapper.destroy();
    });
    test("expect pagination first page button to exist", () => {
        expect(paginationWrapper.find("#zep-button-firspage").exists()).toBe(true);
        expect(paginationWrapper.find("#zep-button-firspage").classes()).toContain("zep-button");
        expect(paginationWrapper.find("#zep-button-firspage").classes()).toContain("zep-button-icon");
        expect(paginationWrapper.find("#zep-button-firspage title").text()).toBe("First page");
    })
    test("expect pagination previous page button to exist", () => {
        expect(paginationWrapper.find("#zep-button-previouspage").exists()).toBe(true);
        expect(paginationWrapper.find("#zep-button-previouspage").classes()).toContain("zep-button");
        expect(paginationWrapper.find("#zep-button-previouspage").classes()).toContain("zep-button-icon");
        expect(paginationWrapper.find("#zep-button-previouspage title").text()).toBe("Previous");
    })
    test("expect pagination page buttons to exist", () => {
        expect(paginationWrapper.find(".zep-button-pagination").exists()).toBe(true);
        expect(paginationWrapper.findAll(".zep-button-pagination").length).toBe(paginationWrapper.props().perpage);
    })
    test("expect pagination next page button to exist", () => {
        expect(paginationWrapper.find("#zep-button-nextpage").exists()).toBe(true);
        expect(paginationWrapper.find("#zep-button-nextpage").classes()).toContain("zep-button");
        expect(paginationWrapper.find("#zep-button-nextpage").classes()).toContain("zep-button-icon");
        expect(paginationWrapper.find("#zep-button-nextpage title").text()).toBe("Next");
    })
    test("expect pagination last page button to exist", () => {
        expect(paginationWrapper.find("#zep-button-lastpage").exists()).toBe(true);
        expect(paginationWrapper.find("#zep-button-lastpage").classes()).toContain("zep-button");
        expect(paginationWrapper.find("#zep-button-lastpage").classes()).toContain("zep-button-icon");
        expect(paginationWrapper.find("#zep-button-lastpage title").text()).toBe("Last page");
    })
    test("expect click event to be emitted", () => {
        expect(paginationWrapper.vm.currentpage).toBe(1)
        paginationWrapper.vm.$emit("click");
        expect(paginationWrapper.emitted("click")).toBeTruthy();
    });
    test("expect onClickFirstPage to emit onPagechanged event and disable first and previous page buttons", () => {
        paginationWrapper.vm.onClickFirstPage();
        expect(paginationWrapper.emitted("onPagechanged")).toBeTruthy();
        expect(paginationWrapper.find("#zep-button-firspage").attributes("disabled")).toBe("disabled");
        expect(paginationWrapper.find("#zep-button-previouspage").attributes("disabled")).toBe("disabled");

    });
    test("expect onClickPreviousPage to emit onPagechanged event", () => {
        paginationWrapper.vm.onClickPreviousPage();
        expect(paginationWrapper.emitted("onPagechanged")).toBeTruthy();
    });
    test("expect onClickPage to emit onPagechanged event", () => {
        paginationWrapper.vm.onClickPage();
        expect(paginationWrapper.emitted("onPagechanged")).toBeTruthy();
    });
    test("expect onClickNextPage to emit onPagechanged event", () => {
        paginationWrapper.vm.onClickNextPage();
        expect(paginationWrapper.emitted("onPagechanged")).toBeTruthy();
    });
    test("expect onClickLastPage to emit onPagechanged event and disable lastpage and next page buttons", () => {
        paginationWrapper.vm.onClickLastPage();
        expect(paginationWrapper.emitted("onPagechanged")).toBeTruthy();
        paginationWrapper.setProps({ currentpage: 5 })
        expect(paginationWrapper.find("#zep-button-nextpage").attributes("disabled")).toBe("disabled");
        expect(paginationWrapper.find("#zep-button-lastpage").attributes("disabled")).toBe("disabled");

    });
    test("expect onClick button with class zep-button-pagination to have one with active class ", () => {
        paginationWrapper.vm.onClickPage();
        expect(paginationWrapper.find(".zep-button-pagination.active").exists()).toBe(true);
    });

})