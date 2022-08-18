import { getMutations } from "../../get";
import { createMutations } from "../../create";
import { deleteMutations } from "../../delete";
import { updateMutations } from "../../update";
const mutations = {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  REST_SALE(state) {
    state.sale = {
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
          present: {
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
    state.sale.data.gallery.splice(payload, 1);
    console.log(state.sale.data.gallery);
  },
};
export default mutations;
