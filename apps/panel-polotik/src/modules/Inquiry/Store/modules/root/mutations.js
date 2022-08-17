import { getMutations } from "@polotik/modules/Inquiry/Store/get";
import { createMutations } from "@polotik/modules/Inquiry/Store/create";
import { deleteMutations } from "@polotik/modules/Inquiry/Store/delete";
import { updateMutations } from "@polotik/modules/Inquiry/Store/update";
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
