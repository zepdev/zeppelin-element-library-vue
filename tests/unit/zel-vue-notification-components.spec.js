import { shallowMount } from "@vue/test-utils";
import { ZelVueNotifications } from "@/entry";
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
