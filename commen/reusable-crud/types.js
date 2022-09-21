import * as typesCreate from "./create/create.types";
import * as typesDelete from "./delete/delete.types";
import * as typesUpdate from "./update/update.types";
import * as typesGet from "./get/get.types";
import * as typesDisable from "./disable/disable.types";
export default {
  ...typesCreate,
  ...typesDelete,
  ...typesUpdate,
  ...typesGet,
  ...typesDisable,
};
