import Vue from "vue";
import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  [themeTypes.GET_ALL_THEME_SUCCESS](_, payload) {},
  [themeTypes.GET_ALL_THEME_FAILURE](_, error) {},
  [themeTypes.GET_ONE_THEME_SUCCESS](_, payload) {},
  [themeTypes.GET_ONE_THEME_FAILURE](_, error) {},
};
