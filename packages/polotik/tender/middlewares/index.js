import store from "@polotik/store";
export const resetTender = (to, from, next) => {
  store.commit("guilds/tender/RESET_TENDER");
  store.commit("upload/REST_IMAGES");
  next();
};
