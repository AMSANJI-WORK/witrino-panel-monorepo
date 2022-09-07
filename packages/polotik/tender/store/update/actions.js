import {
  UPDATE_TENDER_ASYNC,
  UPDATE_TENDER_SUCCESS,
  UPDATE_TENDER_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_TENDER_ASYNC]({ commit }, payload) {
    try {
      commit("formLoading/TOGGLE_FORM_LOADING");
      delete payload.created_at;
      delete payload.updated_at;
      delete payload?.offers;
      delete payload?.user_offer;
      payload.data.category = payload.data.category.map((el) => {
        return el?.id ? el.id : el;
      });
      const { data } = await guildsRepository.updateTender(payload.id, payload);
      commit(UPDATE_TENDER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_TENDER_FAILURE, error);
    } finally {
      commit("formLoading/TOGGLE_FORM_LOADING");
    }
  },
};
