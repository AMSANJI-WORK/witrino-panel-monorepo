import store from "@polotik/store";
function paginationMiddleware(to, from, next) {
  store.commit("REST_PAGINATION");
  next();
}
export default paginationMiddleware;
