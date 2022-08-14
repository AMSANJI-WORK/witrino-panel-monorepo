import createModule from "./create";
import deleteModule from "./delete";
import updateModule from "./update";
import disableModule from "./disable";
import pagination from "./pagination";
import permission from "./permission";
import getModule from "./get";
export default {
  create: createModule,
  delete: deleteModule,
  update: updateModule,
  disable: disableModule,
  get: getModule,
  pagination,
  permission,
};
