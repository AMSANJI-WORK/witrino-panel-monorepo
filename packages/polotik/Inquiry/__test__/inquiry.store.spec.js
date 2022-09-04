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
} from "@packages/polotik/inquiry/__mock__/store";
import Types from "@packages/polotik/inquiry/store/modules/root/types";

describe("inquiry mutations and getters", () => {
  let inquiryList;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_INQUIRY_SUCCESS}`, dataAll);
    inquiryList = store.getters[`${SOURCE}/inquiryList`];
  });
  afterEach(() => {
    store.state.guilds.inquiry = defualtState;
  });

  it("get all", () => {
    expect(inquiryList.length).toBe(2);
    expect(inquiryList).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_AN_INQUIRY_SUCCESS}`, dataOne);
    const inquiry = store.getters[`${SOURCE}/inquiry`];
    expect(inquiry).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_INQUIRY_SUCCESS}`, dataOne.data.id);
    expect(inquiryList).not.toContain(dataOne.data);
    expect(inquiryList.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_INQUIRY_SUCCESS}`, dataCreate);
    inquiryList = store.getters[`${SOURCE}/inquiryList`];
    expect(inquiryList.length).toBe(3);
    expect(inquiryList).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_INQUIRY_SUCCESS}`, dataUpdate.data);
    inquiryList = store.getters[`${SOURCE}/inquiryList`];
    let inquiry = inquiryList.find((inquiry) => inquiry.id == dataUpdate.data.id);
    expect(inquiryList.length).toBe(2);
    expect(inquiry.title).toBe(dataUpdate.data.title);
  });
});
