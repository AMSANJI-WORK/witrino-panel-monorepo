import { getActions } from "../get";
import { createActions } from "../create";
import { deleteActions } from "../delete";
import { updateActions } from "../update";
export default {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
