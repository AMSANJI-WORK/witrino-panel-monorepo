import { createActions } from "../../create";
import { deleteActions } from "../../delete";
import { updateActions } from "../../update";
import { getActions } from "../../get";
export default {
  ...createActions,
  ...deleteActions,
  ...updateActions,
  ...getActions,
};
