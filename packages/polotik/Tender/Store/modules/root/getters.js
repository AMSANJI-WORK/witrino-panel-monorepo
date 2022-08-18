import Cookies from "js-cookie";
const getters = {
  currentUserTenders(state) {
    return state.tenders.filter(
      (tender) => tender.user_id === Cookies.get("user-id")
    );
  },
  allTenders(state) {
    return state.tenders;
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
