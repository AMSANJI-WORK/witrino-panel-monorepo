import store from "@polotik/store";
export const resetSale = (to, from, next) => {
  store.commit("guilds/sale/REST_SALE");
  store.commit("upload/REST_IMAGES");
  next();
};
