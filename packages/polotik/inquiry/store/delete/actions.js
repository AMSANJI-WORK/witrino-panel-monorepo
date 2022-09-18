import {
  DELETE_INQUIRY_ASYNC,
  DELETE_INQUIRY_SUCCESS,
  DELETE_INQUIRY_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_INQUIRY_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const { data } = await guildsRepository.deleteRequset(payload, "inquiry");
      commit(DELETE_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(DELETE_INQUIRY_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
