import store from "@polotik/store";
export const resetInquriry = (to, from, next) => {
  store.commit("inquiry/REST_INQURIRY");
  next();
};
