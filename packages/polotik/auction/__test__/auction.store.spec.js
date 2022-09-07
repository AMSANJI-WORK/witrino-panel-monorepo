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
} from "@packages/polotik/auction/__mock__/store";
import Types from "@packages/polotik/auction/store/modules/root/types";

describe("auction mutations and getters", () => {
  let auctionList;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_AUCTION_SUCCESS}`, dataAll);
    auctionList = store.getters[`${SOURCE}/auctionList`];
  });
  afterEach(() => {
    store.state.guilds.auction = defualtState;
  });

  it("get all", () => {
    expect(auctionList.length).toBe(2);
    expect(auctionList).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_AN_AUCTION_SUCCESS}`, dataOne);
    const auction = store.getters[`${SOURCE}/auction`];
    expect(auction).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_AUCTION_SUCCESS}`, dataOne.data.id);
    expect(auctionList).not.toContain(dataOne.data);
    expect(auctionList.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_AUCTION_SUCCESS}`, dataCreate);
    auctionList = store.getters[`${SOURCE}/auctionList`];
    expect(auctionList.length).toBe(3);
    expect(auctionList).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_AUCTION_SUCCESS}`, dataUpdate.data);
    auctionList = store.getters[`${SOURCE}/auctionList`];
    let auction = auctionList.find((auction) => auction.id == dataUpdate.data.id);
    expect(auctionList.length).toBe(2);
    expect(auction.title).toBe(dataUpdate.data.title);
  });
});
