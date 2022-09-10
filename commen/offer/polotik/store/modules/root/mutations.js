import { createMutations } from "../create";
import { getMutations } from "../get";

export default {
  ...getMutations,
  ...createMutations,
};
