import { createMutations } from "@applets/polotik/commen/request/store/create/create.module";
import { deleteMutations } from "@applets/polotik/commen/request/store/delete/delete.module";
import { getMutations } from "@applets/polotik/commen/request/store/get/get.module";
import { updateMutations } from "@applets/polotik/commen/request/store/update/update.module";
const mutations = {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  DELETE_IMAGE_FROM_GALLERY(state, payload) {
    state.item.data.gallery.splice(payload, 1);
  },
  REST_INQURIRY(state) {
    state.item = {
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      data: {
        gallery: [],
        category: [],
        count: 0,
        endDay: 1,
        unit: null,
        amount: null,
        placeDelivery: null,
      },
      user_offer: [],
      offers: {
        count: null,
        page: null,
        last_page: null,
        data: [],
      },
      user_id: null,
    };
  },
};
export default mutations;
