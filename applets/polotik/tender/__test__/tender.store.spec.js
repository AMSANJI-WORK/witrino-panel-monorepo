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
} from "@applets/polotik/tender/__mock__/store";
import Types from "@applets/polotik/tender/store/modules/root/types";

describe("tender mutations and getters", () => {
  let tenderList;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_TENDER_SUCCESS}`, dataAll);
    tenderList = store.getters[`${SOURCE}/tenderList`];
  });
  afterEach(() => {
    store.state.guilds.tender = defualtState;
  });

  it("get all", () => {
    expect(tenderList.length).toBe(2);
    expect(tenderList).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_ONE_TENDER_SUCCESS}`, dataOne);
    const tender = store.getters[`${SOURCE}/tender`];
    expect(tender).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_TENDER_SUCCESS}`, dataOne.data.id);
    expect(tenderList).not.toContain(dataOne.data);
    expect(tenderList.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_TENDER_SUCCESS}`, dataCreate);
    tenderList = store.getters[`${SOURCE}/tenderList`];
    expect(tenderList.length).toBe(3);
    expect(tenderList).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_TENDER_SUCCESS}`, dataUpdate.data);
    tenderList = store.getters[`${SOURCE}/tenderList`];
    let tender = tenderList.find((tender) => tender.id == dataUpdate.data.id);
    expect(tenderList.length).toBe(2);
    expect(tender.title).toBe(dataUpdate.data.title);
  });
});
