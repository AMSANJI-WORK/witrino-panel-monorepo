import { DELETE_ASYNC, DELETE_SUCCESS, DELETE_FAILURE } from "./delete.types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [DELETE_ASYNC]({ commit }, { service, payload }) {
    try {
      commit("loading/TOGGLE_TABLE_LOADING");
      await baseRepository.delete(service, payload);
      commit(DELETE_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_TABLE_LOADING");
    }
  },
  [DELETE_SUCCESS](state, id) {},
  [DELETE_FAILURE](_, error) {},
};
