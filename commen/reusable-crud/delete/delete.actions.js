import { DELETE_ASYNC, DELETE_SUCCESS, DELETE_FAILURE } from "./delete.types";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_TABLE_LOADING");
      await guildsRepository.deleteRequset(payload, service);
      commit(DELETE_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING");
    }
  },
};
