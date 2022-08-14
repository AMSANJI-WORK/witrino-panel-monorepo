import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as paginationTypes from "./modules/pagination/types";
import * as getTypes from "./modules/get/types";

const SET_ROLE = "SET_ROLE";
const SET_ROLES = "SET_ROLES";
const CRATE_ROLE = "CRATE_ROLE";
const UPDATE_ROLE = "UPDATE_ROLE";
const DELETE_ROLE = "DELETE_ROLE";
const DISABLE_ROLE = "DISABLE_ROLE";

export const roleTypes = {
  SET_ROLE,
  SET_ROLES,
  CRATE_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
  DISABLE_ROLE,
  ...paginationTypes,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
