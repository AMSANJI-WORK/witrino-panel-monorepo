import * as createTypes from "@polotik/modules/Auction/Store/create/types";
import * as deleteTypes from "@polotik/modules/Auction/Store/delete/types";
import * as getTypes from "@polotik/modules/Auction/Store/get/types";
import * as updateTypes from "@polotik/modules/Auction/Store/update/types";

export default {
  ...createTypes,
  ...deleteTypes,
  ...getTypes,
  ...updateTypes,
};
