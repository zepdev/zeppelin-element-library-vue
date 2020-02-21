import { mount } from "@vue/test-utils";
import { ZelVueTable } from "@/entry";

describe("ZelVueTable", () => {
  let tableWrapper;
  beforeEach(() => {
    tableWrapper = mount(ZelVueTable, {
      propsData: {
        title: "Personal Data",
        subtitle: "IT Desk",
        tableHeaderData: [
          {
            id: "1",
            headername: "StudentID"
          },
          {
            id: "2",
            headername: "Last Name"
          },
          {
            id: "3",
            headername: "first Name"
          },
          {
            id: "4",
            headername: "Date of Birth"
          }
        ],
        tableBodyData: [
          {
            id: "1",
            name: "Kofi",
            firstName: "Adjei",
            DOB: "01.12.1991"
          },
          {
            id: "2",
            name: "Ama",
            firstName: "Vy",
            DOB: "01.03.1991"
          },
          {
            id: "3",
            name: "Abena",
            firstName: "Mensah",
            DOB: "19.11.1991"
          },
          {
            id: "4",
            name: "Yaw",
            firstName: "Nelson",
            DOB: "12.12.1991"
          },
          {
            id: "5",
            name: "Yaa",
            firstName: "Owusu",
            DOB: "31.12.1995"
          }
        ],
        tableFooterData: [
          {
            id: "1",
            name: "Total"
          },
          {
            id: "2",
            name: "Count"
          },
          {
            id: "3",
            name: "count"
          },
          {
            id: "4",
            name: "sum"
          }
        ]
      },
      template: `<zTable :tableHeaderData="tableHeaderData" :tableBodyData="tableBodyData"  :tableFooterData="tableFooterData"></zTable>`,
      components: { zTable: ZelVueTable }
    });
  });
  afterEach(() => {
    tableWrapper.destroy();
  });
  test("expect table to have a header set", () => {
    expect(tableWrapper.find("h1").text()).toBe("Personal Data");
  });
  test("expect table to have a sub-title header set", () => {
    expect(tableWrapper.find("h2").text()).toBe("IT Desk");
  });
  test("expect table header data to be set", () => {
    expect(tableWrapper.props().tableHeaderData).toBeDefined();
  });
  test("expect table body data to be set", () => {
    expect(tableWrapper.props().tableBodyData).toBeDefined();
  });
  test("expect table footer data to be set", () => {
    expect(tableWrapper.props().tableFooterData).toBeDefined();
  });
  test("expect rendered table data(td) in tbody to be equal to items in the tableBodyData length", () => {
    let tbody_tr = tableWrapper.findAll("tbody tr");
    expect(tbody_tr.length).toBe(tableWrapper.props().tableBodyData.length);
  });
  test("expect rendered table header(th) in thead to be equal to items in the tableHeader length", () => {
    let thead_tr = tableWrapper.findAll("thead th");
    expect(thead_tr.length).toBe(tableWrapper.props().tableHeaderData.length);
  });
  test("expect rendered table footer(tfoot) in thead to be equal to items in the tablefooter data length", () => {
    let tfoot_tr = tableWrapper.findAll("tfoot td");
    expect(tfoot_tr.length).toBe(tableWrapper.props().tableFooterData.length);
  });
});
