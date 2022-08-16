import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";

const SET_USER_ADDRESS = "SET_USER_ADDRESS";
const SET_USER_ADDRESSS = "SET_USER_ADDRESSS";
const CRAETE_USER_ADDRESS = "CRAETE_USER_ADDRESS";
const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS";
const DELETE_USER_ADDRESS = "DELETE_USER_ADDRESS";
const DISABLE_USER_ADDRESS = "DISABLE_USER_ADDRESS";

export const userAddressTypes = {
  SET_USER_ADDRESS,
  SET_USER_ADDRESSS,
  CRAETE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  DISABLE_USER_ADDRESS,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
