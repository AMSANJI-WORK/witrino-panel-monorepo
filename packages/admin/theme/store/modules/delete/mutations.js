import Vue from "vue";
import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  [themeTypes.DELETE_THEME_SUCCESS](_, payload) {},
  [themeTypes.DELETE_THEME_FAILURE](_, error) {},
};
