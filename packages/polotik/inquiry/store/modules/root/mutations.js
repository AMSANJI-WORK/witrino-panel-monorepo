import { getMutations } from "@packages/polotik/inquiry/store/get";
import { createMutations } from "@packages/polotik/inquiry/store/create";
import { deleteMutations } from "@packages/polotik/inquiry/store/delete";
import { updateMutations } from "@packages/polotik/inquiry/store/update";
const mutations = {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  DELETE_IMAGE_FROM_GALLERY(state, payload) {
    state.inquiry.data.gallery.splice(payload, 1);
  },
  REST_INQURIRY(state) {
    state.inquiry = {
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      data: {
        gallery: [],
        category: null,
        count: 0,
        endDay: 1,
        placeDelivery: null,
      },
      user_id: null,
    };
  },
};
export default mutations;
