import store from "@polotik/store";
export default function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 350);
  store.commit("REST_PAGINATION");
}
