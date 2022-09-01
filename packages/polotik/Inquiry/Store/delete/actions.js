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
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const data = await guildsRepository.deleteInquiry(payload);
      if (data.status === 204 && data.data === "")
        commit(DELETE_INQUIRY_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_INQUIRY_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
