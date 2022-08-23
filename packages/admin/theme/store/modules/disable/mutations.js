import Vue from "vue";
import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  [themeTypes.DISABLE_THEME_SUCCESS](_, payload) {},
  [themeTypes.DISABLE_THEME_FAILURE](_, error) {},
};
