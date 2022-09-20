import address from "@packages/admin/users/modules/address/store";
import createModule from "./create";
import deleteModule from "./delete";
import updateModule from "./update";
import disableModule from "./disable";
import getModule from "./get";
import loading from "@commen/loading/modules/form/store";
import pagination from "@commen/pagination/witrino/store";

export default {
  create: createModule,
  delete: deleteModule,
  update: updateModule,
  disable: disableModule,
  get: getModule,
  address,
  loading,
  pagination,
};
