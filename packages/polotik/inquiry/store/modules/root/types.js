import * as createTypes from "@packages/polotik/inquiry/store/create/types";
import * as deleteTypes from "@packages/polotik/inquiry/store/delete/types";
import * as getTypes from "@packages/polotik/inquiry/store/get/types";
import * as updateTypes from "@packages/polotik/inquiry/store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
