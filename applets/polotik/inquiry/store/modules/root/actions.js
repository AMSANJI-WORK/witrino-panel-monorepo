import { createActions } from "@applets/polotik/commen/request/store/create/create.module";
import { deleteActions } from "@applets/polotik/commen/request/store/delete/delete.module";
import { getActions } from "@applets/polotik/commen/request/store/get/get.module";
import { updateActions } from "@applets/polotik/commen/request/store/update/update.module";

const actions = {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
export default actions;
