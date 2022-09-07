import * as createTypes from "@packages/polotik/tender/store/create/types";
import * as deleteTypes from "@packages/polotik/tender/store/delete/types";
import * as getTypes from "@packages/polotik/tender/store/get/types";
import * as updateTypes from "@packages/polotik/tender/store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
