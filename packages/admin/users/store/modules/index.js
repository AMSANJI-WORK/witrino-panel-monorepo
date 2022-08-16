import address from "@packages/profile/store/modules/address";
import pagination from "./pagination";
import createModule from "./create";
import deleteModule from "./delete";
import updateModule from "./update";
import disableModule from "./disable";
import getModule from "./get";
export default {
  create: createModule,
  delete: deleteModule,
  update: updateModule,
  disable: disableModule,
  get: getModule,
  pagination,
  address,
};
