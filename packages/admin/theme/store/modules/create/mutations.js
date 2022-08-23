import Vue from "vue";
import router from "@witrino/router";
import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  [themeTypes.CREATE_THEME_SUCCESS](_, payload) {},
  [themeTypes.CREATE_THEME_FAILURE](_, error) {},
};
