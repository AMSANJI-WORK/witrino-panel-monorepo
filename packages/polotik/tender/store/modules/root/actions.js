import { createActions } from "@commen/request/store/create/create.module";
import { deleteActions } from "@commen/request/store/delete/delete.module";
import { getActions } from "@commen/request/store/get/get.module";
import { updateActions } from "@commen/request/store/update/update.module";

export default {
  ...createActions,
  ...deleteActions,
  ...updateActions,
  ...getActions,
};
