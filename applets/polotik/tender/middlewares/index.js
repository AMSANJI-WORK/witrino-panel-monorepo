import store from "@polotik/store";
export const resetTender = (to, from, next) => {
  store.commit("tender/RESET_TENDER");
  next();
};
