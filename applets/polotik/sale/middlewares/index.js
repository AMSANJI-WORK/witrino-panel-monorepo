import store from "@polotik/store";
export const resetSale = (to, from, next) => {
  store.commit("sales/REST_SALE");
  next();
};
