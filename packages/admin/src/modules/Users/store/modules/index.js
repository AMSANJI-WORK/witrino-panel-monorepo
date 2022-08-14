import createModule from "./create";
import deleteModule from "./delete";
import updateModule from "./update";
import disableModule from "./disable";
import getModule from "./get";
import pagination from "./pagination";
export default {
  create: createModule,
  delete: deleteModule,
  update: updateModule,
  disable: disableModule,
  get: getModule,
  pagination,
};
