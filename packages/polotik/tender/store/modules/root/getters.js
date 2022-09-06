import Cookies from "js-cookie";
const getters = {
  currentUserTenders(state) {
    return state.tenderList.filter(
      (tender) => tender.user_id === Cookies.get("user-id")
    );
  },
  tenderList(state) {
    return state.tenderList;
  },
  pagination(state) {
    return state.pagination;
  },
  step(state) {
    return state.step;
  },
  tender(state) {
    return state.tender;
  },
};
export default getters;
