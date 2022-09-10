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
} from "@packages/polotik/sale/__mock__/store";
import Types from "@packages/polotik/sale/store/modules/root/types";

describe("sale mutations and getters", () => {
  let sales;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_SALE_SUCCESS}`, dataAll);
    sales = store.getters[`${SOURCE}/saleList`];
  });
  afterEach(() => {
    store.state.guilds.sale = defualtState;
  });

  it("get all", () => {
    expect(sales.length).toBe(2);
    expect(sales).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_ONE_SALE_SUCCESS}`, dataOne);
    const sale = store.getters[`${SOURCE}/sale`];
    expect(sale).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_SALE_SUCCESS}`, dataOne.data.id);
    expect(sales).not.toContain(dataOne.data);
    expect(sales.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_SALE_SUCCESS}`, dataCreate);
    sales = store.getters[`${SOURCE}/saleList`];
    expect(sales.length).toBe(3);
    expect(sales).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_SALE_SUCCESS}`, dataUpdate.data);
    sales = store.getters[`${SOURCE}/saleList`];
    let sale = sales.find((sale) => sale.id == dataUpdate.data.id);
    expect(sales.length).toBe(2);
    expect(sale.title).toBe(dataUpdate.data.title);
  });
});
