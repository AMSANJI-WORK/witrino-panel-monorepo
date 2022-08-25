import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";
import * as dFormTypes from "./modules/daynamic-form/types";

const SET_PLAN = "SET_PLAN";
const SET_PLAN_STEP_BY_STEP = "SET_PLAN_STEP_BY_STEP";
const SET_PLAN_LIST = "SET_PLAN_LIST";
const CRAETE_PLAN = "CRAETE_PLAN";
const UPDATE_PLAN = "UPDATE_PLAN";
const DELETE_PLAN = "DELETE_PLAN";
const DISABLE_PLAN = "DISABLE_PLAN";

export const planTypes = {
  SET_PLAN,
  SET_PLAN_LIST,
  SET_PLAN_STEP_BY_STEP,
  CRAETE_PLAN,
  UPDATE_PLAN,
  DELETE_PLAN,
  DISABLE_PLAN,
  ...dFormTypes,
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
