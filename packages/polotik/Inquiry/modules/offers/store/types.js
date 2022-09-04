import * as createTypes from "./create/types";
import * as deleteTypes from "./delete/types";
import * as getTypes from "./get/types";
import * as updateTypes from "./update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
