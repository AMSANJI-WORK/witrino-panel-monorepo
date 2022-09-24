import {
  DISABLE_ASYNC,
  DISABLE_FAILURE,
  DISABLE_SUCCESS,
} from "./disable.types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [DISABLE_ASYNC]({ commit }, { service, payload }) {
    try {
      commit("loading/TOGGLE_TABLE_LOADING");
      await baseRepository.disable(service, payload.id, {
        updated_id: payload.updated_id,
      });
      commit(DISABLE_SUCCESS, payload.id);
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
