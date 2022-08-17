import { createActions } from "../../create";
import { deleteActions } from "../../delete";
import { getActions } from "../../get";
import { updateActions } from "../../update";

export default {
  ...getActions,
  ...createActions,
  ...deleteActions,
  ...updateActions,
};
