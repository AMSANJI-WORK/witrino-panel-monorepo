import { createMutations } from "../create";
import { getMutations } from "../get";
import { deleteMutations } from "../delete";
import { updateMutations } from "../update";
export default {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
};
