export default {
  offers(state) {
    return state.offers;
  },
  userOffers(state) {
    return state.userOffers;
  },
  offersCount(state) {
    return state.offers.length;
  },
  offer(state) {
    return state.offer;
  },
  user: (state) => state.user,
  pagination: (state) => state.pagination,
};
