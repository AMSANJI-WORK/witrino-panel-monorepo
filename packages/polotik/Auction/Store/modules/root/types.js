import * as createTypes from "@packages/polotik/auction/store/create/types";
import * as deleteTypes from "@packages/polotik/auction/store/delete/types";
import * as getTypes from "@packages/polotik/auction/store/get/types";
import * as updateTypes from "@packages/polotik/auction/store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
