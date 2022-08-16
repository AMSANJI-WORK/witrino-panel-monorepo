import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as paginationTypes from "./modules/pagination/types";
import * as getTypes from "./modules/get/types";

const SET_ROLE = "SET_ROLE";
const SET_ROLES = "SET_ROLES";
const CRAETE_ROLE = "CRAETE_ROLE";
const UPDATE_ROLE = "UPDATE_ROLE";
const DELETE_ROLE = "DELETE_ROLE";
const DISABLE_ROLE = "DISABLE_ROLE";

export const roleTypes = {
  SET_ROLE,
  SET_ROLES,
  CRAETE_ROLE,
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
