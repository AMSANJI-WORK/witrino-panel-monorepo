import { createMutations } from "@applets/polotik/commen/request/store/create/create.module";
import { deleteMutations } from "@applets/polotik/commen/request/store/delete/delete.module";
import { getMutations } from "@applets/polotik/commen/request/store/get/get.module";
import { updateMutations } from "@applets/polotik/commen/request/store/update/update.module";
const mutations = {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  REST_SALE(state) {
    state.item = {
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      user_id: null,
      data: {
        gallery: [],
        docs: [],
        category: null,
        place: null,
        count: null,
        unit: null,
        amount: null,
        price: {
          limited: false,
          base: null,
          max: null,
          min: null,
          priceType: null,
          percent: {
            limited: false,
            max: null,
            min: null,
          },
        },
        participate: {
          public: false,
          userPanel: false,
          seeParticipantsInfo: false,
        },
      },
    };
  },
  DELETE_IMAGE_FROM_GALLERY(state, payload) {
    state.item.data.gallery.splice(payload, 1);
  },
};
export default mutations;
