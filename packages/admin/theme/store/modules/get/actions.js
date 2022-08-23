import { themeTypes } from "@packages/admin/theme/store/types";
import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");

export default {
  async [themeTypes.GET_ALL_THEME_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
      const { data } = await adminRepository.getTheme(payload);
      commit(`admin/theme/${themeTypes.SET_THEME_LIST}`, data.data, {
        root: true,
      });
      commit(themeTypes.GET_ALL_THEME_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(themeTypes.GET_ALL_THEME_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_TABLE_LOADING", {}, { root: true });
    }
  },
  async [themeTypes.GET_ONE_THEME_ASYNC]({ commit }, payload) {
    try {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
      const { data } = await adminRepository.getTheme(payload);
      commit(`admin/theme/${themeTypes.SET_THEME}`, data.data[0], {
        root: true,
      });
      commit(themeTypes.GET_ONE_THEME_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(themeTypes.GET_ONE_THEME_FAILURE, error);
    } finally {
      commit("shared/loading/TOGGLE_FORM_LOADING", {}, { root: true });
    }
  },
};
