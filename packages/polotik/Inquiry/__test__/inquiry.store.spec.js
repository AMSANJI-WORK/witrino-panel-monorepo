import Vue from "vue";
import store from "@polotik/store";
import toast from "@polotik/plugins/toast";
import { expect, describe, it } from "vitest";
import {
  dataAll,
  dataOne,
  dataCreate,
  defualtState,
  dataUpdate,
  SOURCE,
} from "@packages/polotik/Inquiry/__mock__/store";
import Types from "@packages/polotik/Inquiry/Store/modules/root/types";

describe("inquiry mutations and getters", () => {
  let inquiries;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_INQUIRY_SUCCESS}`, dataAll);
    inquiries = store.getters[`${SOURCE}/allInquiries`];
  });
  afterEach(() => {
    store.state.guilds.inquiry = defualtState;
  });

  it("get all", () => {
    expect(inquiries.length).toBe(2);
    expect(inquiries).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_AN_INQUIRY_SUCCESS}`, dataOne);
    const inquiry = store.getters[`${SOURCE}/inquiry`];
    expect(inquiry).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_INQUIRY_SUCCESS}`, dataOne.data.id);
    expect(inquiries).not.toContain(dataOne.data);
    expect(inquiries.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_INQUIRY_SUCCESS}`, dataCreate);
    inquiries = store.getters[`${SOURCE}/allInquiries`];
    expect(inquiries.length).toBe(3);
    expect(inquiries).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_INQUIRY_SUCCESS}`, dataUpdate.data);
    inquiries = store.getters[`${SOURCE}/allInquiries`];
    let inquiry = inquiries.find((inquiry) => inquiry.id == dataUpdate.data.id);
    expect(inquiries.length).toBe(2);
    expect(inquiry.title).toBe(dataUpdate.data.title);
  });
});
