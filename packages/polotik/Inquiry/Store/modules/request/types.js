import * as createTypes from "./create/types";
import * as deleteTypes from "./delete/types";
import * as getTypes from "./get/types";
import * as updateTypes from "./update/types";

export default {
  RESOURCE: "guilds/services/offer",
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
