import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";
const SET_ZONE= "SET_ZONE";
const SET_ZONE_LIST = "SET_ZONE_LIST";
const CRAETE_ZONE= "CRAETE_ZONE";
const UPDATE_ZONE= "UPDATE_ZONE";
const DELETE_ZONE= "DELETE_ZONE";
const DISABLE_ZONE= "DISABLE_ZONE";

export const zoneTypes = {
  SET_ZONE,
  SET_ZONE_LIST,
  CRAETE_ZONE,
  UPDATE_ZONE,
  DELETE_ZONE,
  DISABLE_ZONE,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
