import { getMutations } from "./get";
import { createMutations } from "./create";
import { deleteMutations } from "./delete";
import { updateMutations } from "./update";
const mutations = {
    ...getMutations,
    ...createMutations,
    ...deleteMutations,
    ...updateMutations,
    DELETE_IMAGE_FROM_GALLERY(state, payload) {
        state.inquiry.data.gallery.splice(payload, 1);
        console.log(state.inquiry.data.gallery);
    },
    REST_INQURIRY(state) {
        state.inquiry = {};
    },
};
export default mutations;
