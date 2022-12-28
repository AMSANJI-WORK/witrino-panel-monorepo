import * as TYPES from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");
import { setLoadingTypes } from "@applets/commen/loading/modules/skeleton/utils";
export default {
  async [TYPES.GET_ALL_OFFER_ASYNC]({ commit, getters }, payload) {
    let loadingType = setLoadingTypes.pageListOffers(getters.offers.length);
    commit(loadingType);
    try {
      const { data } = await guildsRepository.getAllOffers(
        payload.target,
        payload.id,
        getters["pagination/pagination"]
      );
      commit("pagination/SET_PAGINATION", data);
      commit(TYPES.GET_ALL_OFFER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(TYPES.GET_ALL_OFFER_FAILURE, error);
    } finally {
      commit(loadingType);
    }
  },

  [TYPES.CHANGE_PAGE_PAGINATION]({ commit, dispatch }, payload) {
    commit(TYPES.CHANGE_PAGE_PAGINATION, payload);
    dispatch(TYPES.GET_ALL_OFFER_ASYNC);
  },
};
