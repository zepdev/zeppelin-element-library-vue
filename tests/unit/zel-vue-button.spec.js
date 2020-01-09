import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { ZelVueButton } from "@/entry";
let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ZelVueButton, {
    propsData: {
      onClick: function() {
        return "I am clicked";
      }
    }
  });
});
afterEach(() => {
  wrapper.destroy();
});
describe("ZelVueButton", () => {
  it("should exist correct button class name", () => {
    expect(wrapper.classes()).to.include("zep-button");
  });
  it("should have a button element", () => {
    expect(wrapper.contains("button")).to.be.true;
  });
});
