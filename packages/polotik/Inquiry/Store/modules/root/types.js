import * as createTypes from "@packages/polotik/Inquiry/Store/create/types";
import * as deleteTypes from "@packages/polotik/Inquiry/Store/delete/types";
import * as getTypes from "@packages/polotik/Inquiry/Store/get/types";
import * as updateTypes from "@packages/polotik/Inquiry/Store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
