import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";

const SET_THEME = "SET_THEME";
const SET_THEME_LIST = "SET_THEME_LIST";
const CRAETE_THEME = "CRAETE_THEME";
const UPDATE_THEME = "UPDATE_THEME";
const DELETE_THEME = "DELETE_THEME";
const DISABLE_THEME = "DISABLE_THEME";

export const themeTypes = {
  SET_THEME,
  SET_THEME_LIST,
  CRAETE_THEME,
  UPDATE_THEME,
  DELETE_THEME,
  DISABLE_THEME,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
