import Cookies from "js-cookie";
const getters = {
  currentUserAuctions(state) {
    return state.auctions.filter(
      (auction) => auction.user_id === Cookies.get("user-id")
    );
  },
  allAuctions(state) {
    return state.auctions;
  },
  pagination(state) {
    return state.pagination;
  },
  step(state) {
    return state.step;
  },
  auction(state) {
    return state.auction;
  },
};
export default getters;
