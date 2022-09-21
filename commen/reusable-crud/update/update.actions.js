import { UPDATE_ASYNC, UPDATE_SUCCESS, UPDATE_FAILURE } from "./update.types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.updateRequset(
        payload.id,
        service,
        payload
      );
      commit(UPDATE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING");
    }
  },
};
