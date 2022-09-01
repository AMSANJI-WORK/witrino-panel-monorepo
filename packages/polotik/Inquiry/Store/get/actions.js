import {
  // get all methods
  GET_ALL_INQUIRY_ASYNC,
  GET_ALL_INQUIRY_SUCCESS,
  GET_ALL_INQUIRY_FAILURE,
  // get one methods
  GET_AN_INQUIRY_ASYNC,
  GET_AN_INQUIRY_SUCCESS,
  GET_AN_INQUIRY_FAILURE,
} from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
  async [GET_ALL_INQUIRY_ASYNC]({ commit, rootGetters }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      let selfItemPagination = rootGetters["pagination/selfItemPagination"];
      let pagination = rootGetters["pagination/pagination"];
      if (payload) {
        const { data } = await guildsRepository.getAllInquiries({
          pagination: selfItemPagination,
          userId: payload.currentUserId,
        });
        commit(
          "pagination/SET_PAGINATION",
          {
            target: "selfItemPagination",
            data: {
              page: data.page,
              last_page: data.last_page,
              count: data.count,
            },
          },
          { root: true }
        );

        commit(GET_ALL_INQUIRY_SUCCESS, data);
      } else {
        const { data } = await guildsRepository.getAllInquiries({
          pagination,
          userId: null,
        });
        commit(
          "pagination/SET_PAGINATION",
          {
            target: "pagination",
            data: {
              page: data.page,
              last_page: data.last_page,
              count: data.count,
            },
          },
          { root: true }
        );
        commit(GET_ALL_INQUIRY_SUCCESS, data);
      }
    } catch (error) {
      console.log(error);
      commit(GET_ALL_INQUIRY_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
  async [GET_AN_INQUIRY_ASYNC]({ commit, state }, payload) {
    try {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await guildsRepository.getAnInquiry(payload);
      if (data.data?.offers)
        commit(
          "guilds/inquiry/request/GET_ALL_OFFER_SUCCESS",
          data.data.offers,
          {
            root: true,
          }
        );
      commit(GET_AN_INQUIRY_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_AN_INQUIRY_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
