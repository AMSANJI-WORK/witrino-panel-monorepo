import {
  UPDATE_AUCTION_ASYNC,
  UPDATE_AUCTION_SUCCESS,
  UPDATE_AUCTION_FAILURE,
} from "./types";

import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [UPDATE_AUCTION_ASYNC]({ commit }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });

      delete payload.created_at;
      delete payload.updated_at;
      delete payload?.offers;
      delete payload?.user_offer;
      delete payload?.user_offer;
      delete payload?.data?.offers;
      delete payload?.data?.user_offer;
      payload.data.category = payload.data.category.map((el) => {
        return el?.id ? el.id : el;
      });
      const { data } = await guildsRepository.updateAuction(
        payload.id,
        payload
      );
      commit(UPDATE_AUCTION_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPDATE_AUCTION_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
