import * as createTypes from "@packages/polotik/Auction/Store/create/types";
import * as deleteTypes from "@packages/polotik/Auction/Store/delete/types";
import * as getTypes from "@packages/polotik/Auction/Store/get/types";
import * as updateTypes from "@packages/polotik/Auction/Store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
