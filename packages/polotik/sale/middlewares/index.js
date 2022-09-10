import store from "@polotik/store";
export const resetSale = (to, from, next) => {
  store.commit("guilds/sale/REST_SALE");
  next();
};
