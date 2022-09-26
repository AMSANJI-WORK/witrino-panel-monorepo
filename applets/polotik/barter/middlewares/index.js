import store from "@polotik/store";
export const resetBarter = (to, from, next) => {
  store.commit("barter/REST_BARTER");
  next();
};
