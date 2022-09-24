import mutations from "./modules/root/mutations";
import actions from "./modules/root/actions";
import modules from "./modules";
export default {
  namespaced: true,
  state: () => ({
    userOffers: [],
    offers: [],
    offer: {
      title: null,
      description: null,
      price: null,
      time: null,
      status: 1,
      data: {},
      request_id: null,
      user_id: null,
    },
  }),
  getters: {
    offers(state) {
      return state.offers;
    },
    userOffers(state) {
      return state.userOffers;
    },
    offer(state) {
      return state.offer;
    },
  },
  mutations,
  actions,
  modules,
};
