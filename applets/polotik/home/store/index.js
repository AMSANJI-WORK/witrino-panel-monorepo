import { SET_DASHBOARD, GET_DASHBOARD_DATA } from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const homeRepository = RepositoryFactory.get("home");
import boxTopData from "../../home/mock/boxTop";
import skeletonLoading from "@applets/commen/loading/modules/skeleton/store";
export default {
  namespaced: true,
  modules: {
    skeletonLoading,
  },
  state: () => ({
    cards: [],
  }),
  getters: {
    cards: (state) => state.cards,
  },
  mutations: {
    [SET_DASHBOARD](state, payload) {
      state.cards = [...payload];
      state.cards = state.cards.map((card, index) => {
        return { ...card, icon: boxTopData[index].icon };
      });
    },
  },
  actions: {
    async [GET_DASHBOARD_DATA]({ commit }) {
      try {
        commit("skeletonLoading/TOGGLE_SKELETON_LOADING_DASHBOARD");
        const { data } = await homeRepository.getDashboardData();
        commit("SET_DASHBOARD", data.cards);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(
          () => commit("skeletonLoading/TOGGLE_SKELETON_LOADING_DASHBOARD"),
          1000
        );
      }
    },
  },
};
