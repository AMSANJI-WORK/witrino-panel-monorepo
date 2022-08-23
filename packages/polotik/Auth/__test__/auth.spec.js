import Vue from "vue";
import store from "@polotik/store";
import toast from "@polotik/plugins/toast";
import { expect, describe, it } from "vitest";
import { data, failureData, defualtState } from "@packages/polotik/Auth/__mock__/store";

describe("SetPermission mutations and getters", () => {
  beforeEach(() => {
    new Vue({
      toast,
    });
  });
  afterEach(() => {
    store.state.auth = defualtState;
  });
  it("Success", () => {
    store.commit("auth/SET_PERMISSION_SUCCESS", data);
    expect(store.getters["auth/user"].id).toBe(data.user.id);
    expect(store.getters["auth/token"]).toMatch(data.token);
  });
  it("Error", () => {
    store.commit("auth/SET_PERMISSION_FAILURE", failureData);
    expect(store.getters["auth/token"]).toBe(null);
    expect(store.getters["auth/user"].id).toBe(null);
  });
});
