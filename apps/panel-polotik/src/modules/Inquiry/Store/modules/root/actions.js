import { getActions } from "@polotik/modules/Inquiry/Store/get";
import { createActions } from "@polotik/modules/Inquiry/Store/create";
import { deleteActions } from "@polotik/modules/Inquiry/Store/delete";
import { updateActions } from "@polotik/modules/Inquiry/Store/update";
const actions = {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
export default actions;
