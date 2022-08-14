import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as paginationTypes from "./modules/pagination/types";
import * as getTypes from "./modules/get/types";

const SET_USER = "SET_USER";
const SET_USERS = "SET_USERS";
const CRATE_USER = "CRATE_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const DISABLE_USER = "DISABLE_USER";

export const userTypes = {
  SET_USER,
  SET_USERS,
  CRATE_USER,
  UPDATE_USER,
  DELETE_USER,
  DISABLE_USER,
  ...paginationTypes,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
