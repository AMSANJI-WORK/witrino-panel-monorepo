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
  let barters;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_BARTER_SUCCESS}`, dataAll);
    barters = store.getters[`${SOURCE}/allBarters`];
  });
  afterEach(() => {
    store.state.guilds.barter = defualtState;
  });

  it("get all", () => {
    expect(barters.length).toBe(2);
    expect(barters).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_A_BARTER_SUCCESS}`, dataOne);
    const barter = store.getters[`${SOURCE}/barter`];
    expect(barter).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_BARTER_SUCCESS}`, dataOne.data.id);
    expect(barters).not.toContain(dataOne.data);
    expect(barters.length).toBe(1);
  });
  // -- create is cuurept -- //
  // it("create", () => {
  // store.commit(`${SOURCE}/${Types.CREATE_BARTER_SUCCESS}`, dataCreate);
  // barters = store.getters[`${SOURCE}/allBarters`];
  // expect(barters.length).toBe(3);
  // expect(barters).toContain(dataCreate.data);
  // });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_BARTER_SUCCESS}`, dataUpdate.data);
    barters = store.getters[`${SOURCE}/allBarters`];
    let barter = barters.find((barter) => barter.id == dataUpdate.data.id);
    expect(barters.length).toBe(2);
    expect(barter.title).toBe(dataUpdate.data.title);
  });
});
