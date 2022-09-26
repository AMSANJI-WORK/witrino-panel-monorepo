import * as createTypes from "./create/create.types";
import * as deleteTypes from "./delete/delete.types";
import * as updateTypes from "./update/update.types";
import * as getTypes from "./get/get.types";
export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
