import { createMutations } from "../create";
import { getMutations } from "../get";
import { updateMutations } from "../update";
export default {
  ...getMutations,
  ...createMutations,
  ...updateMutations,
};
