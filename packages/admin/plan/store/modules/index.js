import createModule from "./create";
import deleteModule from "./delete";
import updateModule from "./update";
import disableModule from "./disable";
import getModule from "./get";
import dfrom from "./daynamic-form";
export default {
  create: createModule,
  delete: deleteModule,
  update: updateModule,
  disable: disableModule,
  get: getModule,
  dfrom,
};
