import typesCruds from "@commen/reusable-crud/types";
import { userAddressTypes } from "@packages/admin/users/modules/address/store/types";

export const userTypes = {
  ...userAddressTypes,
  ...typesCruds,
};
