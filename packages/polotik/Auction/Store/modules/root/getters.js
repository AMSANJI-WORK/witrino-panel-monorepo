import Cookies from "js-cookie";
const getters = {
  currentUserAuctions(state) {
    return state.auctionList.filter(
      (auction) => auction.user_id === Cookies.get("user-id")
    );
  },
  auctionList(state) {
    return state.auctionList;
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
