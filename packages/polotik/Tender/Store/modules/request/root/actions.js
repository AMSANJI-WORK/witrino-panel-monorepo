import { getActions } from "../get";
import { createActions } from "../create";
import { updateActions } from "../update";
export default {
  ...getActions,
  ...createActions,
  ...updateActions,
};
