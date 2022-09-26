import store from "@polotik/store";
export const resetAuction = (to, from, next) => {
  store.commit("auction/RESET_AUCTION");
  next();
};
