import Vue from "vue";
import router from "@witrino/router";

import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  [themeTypes.UPDATE_THEME_SUCCESS](_, payload) {},
  [themeTypes.UPDATE_THEME_FAILURE](_, error) {},
};
