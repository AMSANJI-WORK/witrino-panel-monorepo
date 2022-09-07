import store from "@polotik/store";
export const resetAuction = (to, from, next) => {
  store.commit("guilds/auction/RESET_AUCTION");
  store.commit("upload/REST_IMAGES");
  next();
};
