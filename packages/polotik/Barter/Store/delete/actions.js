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
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await guildsRepository.deleteBarter(payload);
      commit(DELETE_BARTER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(DELETE_BARTER_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
