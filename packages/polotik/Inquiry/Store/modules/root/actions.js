import { getActions } from "@packages/polotik/inquiry/store/get";
import { createActions } from "@packages/polotik/inquiry/store/create";
import { deleteActions } from "@packages/polotik/inquiry/store/delete";
import { updateActions } from "@packages/polotik/inquiry/store/update";
const actions = {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
export default actions;
