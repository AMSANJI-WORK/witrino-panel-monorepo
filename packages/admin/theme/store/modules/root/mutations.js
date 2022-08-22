import { themeTypes } from "@packages/admin/theme/store/types";

export default {
  [themeTypes.SET_THEME](state, payload) {
    Object.assign(state.theme, payload);
  },
  [themeTypes.SET_THEME_LIST](state, payload) {
    state.themeList = [...payload.data];
  },
  [themeTypes.CRAETE_THEME](state, payload) {
    state.themeList = [...state.themeList, payload];
  },
  [themeTypes.UPDATE_THEME](state, payload) {
    const targetIndex = state.themeList.findIndex((theme) => theme.id == payload.id);
    Object.assign(state.themeList[targetIndex], payload);
  },
  [themeTypes.DELETE_THEME](state, payload) {
    let targetIndex = state.themeList.findIndex((theme) => theme.id === payload);
    state.themeList.splice(targetIndex, 1);
  },
  [themeTypes.DISABLE_THEME](state, payload) {
    let targetIndex = state.themeList.findIndex((theme) => theme.id === payload);
    state.themeList.splice(targetIndex, 1);
  },
};
