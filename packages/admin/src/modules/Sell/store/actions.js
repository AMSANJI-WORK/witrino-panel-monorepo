import { getActions } from "./get";
import { createActions } from "./create";
import { deleteActions } from "./delete";
import { updateActions } from "./update";
const actions = {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
export default actions;
