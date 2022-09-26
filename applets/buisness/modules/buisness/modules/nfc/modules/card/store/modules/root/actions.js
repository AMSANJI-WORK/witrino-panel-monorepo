import { getActions } from "@applets/commen/reusable-crud/get/get.module";
import { deleteActions } from "@applets/commen/reusable-crud/delete/delete.module";
import { createActions } from "@applets/commen/reusable-crud/create/create.module";
import { disableActions } from "@applets/commen/reusable-crud/disable/disable.module";
import { updateActions } from "@applets/commen/reusable-crud/update/update.module";
export default {
  ...getActions,
  ...updateActions,
  ...deleteActions,
  ...createActions,
  ...disableActions,
};
