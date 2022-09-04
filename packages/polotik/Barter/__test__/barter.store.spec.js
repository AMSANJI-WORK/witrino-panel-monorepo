import Vue from "vue";
import store from "@polotik/store";
import toast from "@polotik/plugins/toast";
import { expect, describe, it } from "vitest";
import {
  dataAll,
  dataOne,
  // dataCreate,
  defualtState,
  dataUpdate,
  SOURCE,
} from "@packages/polotik/barter/__mock__/store";
import Types from "@packages/polotik/barter/store/modules/root/types";

describe("barter mutations and getters", () => {
  let barterList;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_BARTER_SUCCESS}`, dataAll);
    barterList = store.getters[`${SOURCE}/barterList`];
  });
  afterEach(() => {
    store.state.guilds.barter = defualtState;
  });

  it("get all", () => {
    expect(barterList.length).toBe(2);
    expect(barterList).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_A_BARTER_SUCCESS}`, dataOne);
    const barter = store.getters[`${SOURCE}/barter`];
    expect(barter).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_BARTER_SUCCESS}`, dataOne.data.id);
    expect(barterList).not.toContain(dataOne.data);
    expect(barterList.length).toBe(1);
  });
  // -- create is cuurept -- //
  // it("create", () => {
  // store.commit(`${SOURCE}/${Types.CREATE_BARTER_SUCCESS}`, dataCreate);
  // barterList = store.getters[`${SOURCE}/barterList`];
  // expect(barterList.length).toBe(3);
  // expect(barterList).toContain(dataCreate.data);
  // });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_BARTER_SUCCESS}`, dataUpdate.data);
    barterList = store.getters[`${SOURCE}/barterList`];
    let barter = barterList.find((barter) => barter.id == dataUpdate.data.id);
    expect(barterList.length).toBe(2);
    expect(barter.title).toBe(dataUpdate.data.title);
  });
});
