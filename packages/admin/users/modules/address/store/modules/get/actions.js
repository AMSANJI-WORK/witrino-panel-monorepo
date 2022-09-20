import { userTypes } from "@packages/admin/users/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");

export default {
  async [userTypes.GET_ALL_USER_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await baseRepository.getUserAddress(payload);
      commit(`admin/user/address/${userTypes.SET_USER_ADDRESSS}`, data.data, {
        root: true,
      });
      commit(userTypes.GET_ALL_USER_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ALL_USER_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [userTypes.GET_ONE_USER_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await baseRepository.getUserAddress(payload);
      commit(`admin/user/address/${userTypes.SET_USER_ADDRESS}`, data.data[0], {
        root: true,
      });
      commit(userTypes.GET_ONE_USER_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userTypes.GET_ONE_USER_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
