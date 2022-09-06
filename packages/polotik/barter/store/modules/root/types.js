import * as createTypes from "@packages/polotik/barter/store/create/types";
import * as deleteTypes from "@packages/polotik/barter/store/delete/types";
import * as getTypes from "@packages/polotik/barter/store/get/types";
import * as updateTypes from "@packages/polotik/barter/store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
