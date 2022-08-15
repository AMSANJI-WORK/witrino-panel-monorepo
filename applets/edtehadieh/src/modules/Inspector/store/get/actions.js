import {
  GET_A_USER_ASYNC,
  GET_A_USER_SUCCESS,
  GET_A_USER_FAILURE,
} from "./types";

import RepositoryFactory from "@witrino/repositories/factory";
const ProfileRepository = RepositoryFactory.get("profile");

export default {
  async [GET_A_USER_ASYNC]({ commit, rootState }, payload) {
    try {
      rootState.fromLoading = true;
      const { data } = await ProfileRepository.getOneUser(payload);
      commit(GET_A_USER_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(GET_A_USER_FAILURE, error);
    } finally {
      rootState.fromLoading = false;
    }
  },
};
