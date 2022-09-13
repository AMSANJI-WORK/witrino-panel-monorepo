import { createMutations } from "../create";
import { getMutations } from "../get";
import * as TYPES from "./types";
export default {
  [TYPES.RESET_OFFER](state) {},
  [TYPES.RESET_OFFERS](state) {
    console.log(true);
    state.offers = [];
    state.userOffers = [];
  },
  ...getMutations,
  ...createMutations,
};
