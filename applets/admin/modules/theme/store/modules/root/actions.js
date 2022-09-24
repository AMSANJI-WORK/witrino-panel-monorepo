import { getActions } from "@commen/reusable-crud/get/get.module";
import { deleteActions } from "@commen/reusable-crud/delete/delete.module";
import { createActions } from "@commen/reusable-crud/create/create.module";
import { disableActions } from "@commen/reusable-crud/disable/disable.module";
import { updateActions } from "@commen/reusable-crud/update/update.module";
export default {
  ...getActions,
  ...updateActions,
  ...deleteActions,
  ...createActions,
  ...disableActions,
};
