import {
  DISABLE_ASYNC,
  DISABLE_FAILURE,
  DISABLE_SUCCESS,
} from "./disable.types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [DISABLE_ASYNC]({ commit }, { service, id, updated_id }) {
    try {
      commit("loading/TOGGLE_TABLE_LOADING");
      await baseRepository.disable(service, id, { updated_id });
      commit(DISABLE_SUCCESS, id);
    } catch (error) {
      console.log(error);
      commit(DISABLE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_TABLE_LOADING");
    }
  },
  [DISABLE_SUCCESS](state, payload) {},
  [DISABLE_FAILURE](_, error) {},
};
