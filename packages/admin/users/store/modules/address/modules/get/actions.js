import { userAddressTypes } from "../../types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [userAddressTypes.GET_ALL_USER_ADDRESS_ADDRESS_ASYNC]({ commit, dispatch }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getUser(payload);
      dispatch(`admin/userAddress/pagination/${userAddressTypes.SET_PAGINATION}`, data.data, {
        root: true,
      });
      commit(`admin/userAddress/${userAddressTypes.SET_USER_ADDRESS_ADDRESSS}`, data.data, { root: true });
      commit(userAddressTypes.GET_ALL_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.GET_ALL_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [userAddressTypes.GET_ONE_USER_ADDRESS_ADDRESS_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getUser(payload);
      commit(`admin/userAddress/${userAddressTypes.SET_USER_ADDRESS_ADDRESS}`, data.data[0], {
        root: true,
      });
      commit(userAddressTypes.GET_ONE_USER_ADDRESS_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(userAddressTypes.GET_ONE_USER_ADDRESS_ADDRESS_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
