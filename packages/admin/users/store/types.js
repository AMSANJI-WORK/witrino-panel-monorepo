import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";

import { userAddressTypes } from "@packages/admin/users/modules/address/store/types";

const SET_USER = "SET_USER";
const SET_USER_LIST = "SET_USER_LIST";
const CRAETE_USER = "CRAETE_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const DISABLE_USER = "DISABLE_USER";

export const userTypes = {
  SET_USER,
  SET_USER_LIST,
  CRAETE_USER,
  UPDATE_USER,
  DELETE_USER,
  DISABLE_USER,
  ...userAddressTypes,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
