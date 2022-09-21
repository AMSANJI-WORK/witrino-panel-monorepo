import { UPDATE_ASYNC, UPDATE_SUCCESS, UPDATE_FAILURE } from "./update.types";

import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");
export default {
  async [UPDATE_ASYNC]({ commit }, { service, id, payload }) {
    try {
      commit("loading/TOGGLE_FORM_LOADING");
      const { data } = await baseRepository.update(service, id, payload);
      commit(UPDATE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING");
    }
  },
  [UPDATE_SUCCESS](state, payload) {},
  [UPDATE_FAILURE](_, error) {},
};
