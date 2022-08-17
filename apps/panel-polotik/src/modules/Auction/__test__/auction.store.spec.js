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
} from "@polotik/modules/Auction/__mock__/store";
import Types from "@polotik/modules/Auction/Store/modules/root/types";

describe("auction mutations and getters", () => {
  let auctions;
  beforeEach(() => {
    new Vue({
      toast,
    });
    store.commit(`${SOURCE}/${Types.GET_ALL_AUCTION_SUCCESS}`, dataAll);
    auctions = store.getters[`${SOURCE}/allAuctions`];
  });
  afterEach(() => {
    store.state.guilds.auction = defualtState;
  });

  it("get all", () => {
    expect(auctions.length).toBe(2);
    expect(auctions).toContain(dataAll.data[0]);
  });

  it("get one", () => {
    store.commit(`${SOURCE}/${Types.GET_AN_AUCTION_SUCCESS}`, dataOne);
    const auction = store.getters[`${SOURCE}/auction`];
    expect(auction).toMatchObject(dataOne.data);
  });
  it("delete", () => {
    store.commit(`${SOURCE}/${Types.DELETE_AUCTION_SUCCESS}`, dataOne.data.id);
    expect(auctions).not.toContain(dataOne.data);
    expect(auctions.length).toBe(1);
  });

  it("create", () => {
    store.commit(`${SOURCE}/${Types.CREATE_AUCTION_SUCCESS}`, dataCreate);
    auctions = store.getters[`${SOURCE}/allAuctions`];
    expect(auctions.length).toBe(3);
    expect(auctions).toContain(dataCreate.data);
  });
  it("update", () => {
    store.commit(`${SOURCE}/${Types.UPDATE_AUCTION_SUCCESS}`, dataUpdate.data);
    auctions = store.getters[`${SOURCE}/allAuctions`];
    let auction = auctions.find((auction) => auction.id == dataUpdate.data.id);
    expect(auctions.length).toBe(2);
    expect(auction.title).toBe(dataUpdate.data.title);
  });
});
