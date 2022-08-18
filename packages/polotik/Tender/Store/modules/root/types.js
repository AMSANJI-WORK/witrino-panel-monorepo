import * as createTypes from "@packages/polotik/Tender/Store/create/types";
import * as deleteTypes from "@packages/polotik/Tender/Store/delete/types";
import * as getTypes from "@packages/polotik/Tender/Store/get/types";
import * as updateTypes from "@packages/polotik/Tender/Store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
