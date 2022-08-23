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
} from "@packages/polotik/Tender/__mock__/store";
import Types from "@packages/polotik/Tender/Store/modules/root/types";

describe("tender mutations and getters", () => {
  let tenders;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_TENDER_SUCCESS}`, dataAll);
    tenders = store.getters[`${SOURCE}/allTenders`];
  });
  afterEach(() => {
    store.state.guilds.tender = defualtState;
  });

  it("get all", () => {
    expect(tenders.length).toBe(2);
    expect(tenders).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_A_TENDER_SUCCESS}`, dataOne);
    const tender = store.getters[`${SOURCE}/tender`];
    expect(tender).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_TENDER_SUCCESS}`, dataOne.data.id);
    expect(tenders).not.toContain(dataOne.data);
    expect(tenders.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_TENDER_SUCCESS}`, dataCreate);
    tenders = store.getters[`${SOURCE}/allTenders`];
    expect(tenders.length).toBe(3);
    expect(tenders).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_TENDER_SUCCESS}`, dataUpdate.data);
    tenders = store.getters[`${SOURCE}/allTenders`];
    let tender = tenders.find((tender) => tender.id == dataUpdate.data.id);
    expect(tenders.length).toBe(2);
    expect(tender.title).toBe(dataUpdate.data.title);
  });
});
