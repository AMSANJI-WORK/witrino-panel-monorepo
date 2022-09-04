import * as createTypes from "./modules/create/types";
import * as deleteTypes from "./modules/delete/types";
import * as updateTypes from "./modules/update/types";
import * as disableTypes from "./modules/disable/types";
import * as getTypes from "./modules/get/types";
import * as rootTypes from "./modules/root/types";

export const zoneTypes = {
  ...disableTypes,
  ...createTypes,
  ...deleteTypes,
  ...rootTypes,
  ...updateTypes,
  ...getTypes,
};
