import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";

const SET_SERVICE = "SET_SERVICE";
const SET_SERVICE_LIST = "SET_SERVICE_LIST";
const CRAETE_SERVICE = "CRAETE_SERVICE";
const UPDATE_SERVICE = "UPDATE_SERVICE";
const DELETE_SERVICE = "DELETE_SERVICE";
const DISABLE_SERVICE = "DISABLE_SERVICE";

export const serviceTypes = {
  SET_SERVICE,
  SET_SERVICE_LIST,
  CRAETE_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  DISABLE_SERVICE,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
