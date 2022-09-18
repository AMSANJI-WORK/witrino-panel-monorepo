import {
  DELETE_BARTER_ASYNC,
  DELETE_BARTER_SUCCESS,
  DELETE_BARTER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_BARTER_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.deleteRequset(payload, "barter");
      commit(DELETE_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(DELETE_BARTER_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
