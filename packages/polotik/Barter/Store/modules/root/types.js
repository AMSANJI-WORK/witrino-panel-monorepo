import * as createTypes from "@packages/polotik/Barter/Store/create/types";
import * as deleteTypes from "@packages/polotik/Barter/Store/delete/types";
import * as getTypes from "@packages/polotik/Barter/Store/get/types";
import * as updateTypes from "@packages/polotik/Barter/Store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
