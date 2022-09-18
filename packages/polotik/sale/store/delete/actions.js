import {
  DELETE_SALE_ASYNC,
  DELETE_SALE_SUCCESS,
  DELETE_SALE_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [DELETE_SALE_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      const data = await guildsRepository.deleteRequset(payload, "sales");
      if (data.status === 204 && data.data === "")
        commit(DELETE_SALE_SUCCESS, payload);
    } catch (error) {
      console.log(error);
      commit(DELETE_SALE_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
