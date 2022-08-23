import { getActions } from "@packages/polotik/Inquiry/Store/get";
import { createActions } from "@packages/polotik/Inquiry/Store/create";
import { deleteActions } from "@packages/polotik/Inquiry/Store/delete";
import { updateActions } from "@packages/polotik/Inquiry/Store/update";
const actions = {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
export default actions;
