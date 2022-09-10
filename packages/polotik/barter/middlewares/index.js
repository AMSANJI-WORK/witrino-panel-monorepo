import store from "@polotik/store";
export const resetBarter = (to, from, next) => {
  store.commit("guilds/barter/REST_BARTER");
  next();
};
